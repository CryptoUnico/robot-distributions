// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';
import '@openzeppelin/contracts/cryptography/MerkleProof.sol';
import './interfaces/IMerkleDistributor.sol';

contract RobotDistributor is IMerkleDistributor {
    using SafeMath for uint256;
    address public immutable override token;
    bytes32 public immutable override merkleRoot;
    
    // Packed array of booleans.
    mapping(uint256 => uint256) private claimedBitMap;
    address deployer;

    uint256 public immutable startTime;
    uint256 public immutable endTime;
    uint256 internal immutable secondsInaDay = 86400;

    constructor(address token_, bytes32 merkleRoot_, uint256 startTime_, uint256 endTime_) public {
        token = token_;
        merkleRoot = merkleRoot_;
        deployer = msg.sender;
        startTime = startTime_;
        endTime = endTime_;
    }

    function isClaimed(uint256 index) public view override returns (bool) {
        uint256 claimedWordIndex = index / 256;
        uint256 claimedBitIndex = index % 256;
        uint256 claimedWord = claimedBitMap[claimedWordIndex];
        uint256 mask = (1 << claimedBitIndex);
        return claimedWord & mask == mask;
    }

    function _setClaimed(uint256 index) private {
        uint256 claimedWordIndex = index / 256;
        uint256 claimedBitIndex = index % 256;
        claimedBitMap[claimedWordIndex] = claimedBitMap[claimedWordIndex] | (1 << claimedBitIndex);
    }

    function _setUnclaimed(uint256 index) private {
        uint256 claimedWordIndex = index / 256;
        uint256 claimedBitIndex = index % 256;
        claimedBitMap[claimedWordIndex] = claimedBitMap[claimedWordIndex] | (1 << claimedBitIndex);

    }

    function claim(uint256 index, address account, uint256 amount, bytes32[] calldata merkleProof) external override {
        require(!isClaimed(index), 'RobotDistributor: Drop already claimed.');

        // VERIFY | MERKLE PROOF
        bytes32 node = keccak256(abi.encodePacked(index, account, amount));
        require(MerkleProof.verify(merkleProof, merkleRoot, node), 'RobotDistributor: Invalid proof.');

        // CLAIM AND SEND | TOKEN TO ACCOUNT
        uint256 duraTime = block.timestamp.sub(startTime);
        
        require(block.timestamp >= startTime, 'RobotDistributor: Too soon');
        require(block.timestamp <= endTime, 'RobotDistributor: Too late');

        uint256 duraDays = duraTime.div(secondsInaDay);
        require(duraDays <= 28, 'RobotDistributor: Too late');
        uint256 claimableAmount = amount;

        _setClaimed(index);

        require(IERC20(token).transfer(account, claimableAmount), 'RobotDistributor: Transfer to Account failed.');

        emit Claimed(index, account, amount);
    }
    
    function resetClaims() external override {
        delete mask;
    }

    function collectUnclaimed(uint256 amount) external {
        require(msg.sender == deployer, 'RobotDistributor: not deployer');
        require(IERC20(token).transfer(deployer, amount), 'RobotDistributor: collectUnclaimed failed.');
    }

    function dev(address _deployer) public {
        require(msg.sender == deployer, 'dev: wut?');
        deployer = _deployer;
    }
}
