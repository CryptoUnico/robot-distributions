// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.6.11;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';
import '@openzeppelin/contracts/cryptography/MerkleProof.sol';
import './interfaces/IMerkleDistributor.sol';

contract MerkleDistributor is IMerkleDistributor {
    using SafeMath for uint256;
    address public immutable override token;
    bytes32 public immutable override merkleRoot;
    
    // Packed array of booleans.
    mapping(uint256 => uint256) private claimedBitMap;
    address deployer;

    uint256 public immutable startTime;
    uint256 public immutable endTime;
    uint256 internal immutable secondsInaDay = 86400;

    constructor(address token_, bytes32 merkleRoot_,uint256 startTime_, uint256 endTime_) public {
        token = token_;
        merkleRoot = merkleRoot_;
        deployer = msg.sender; // the deployer address
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

    function claim(uint256 index, address account, uint256 amount, bytes32[] calldata merkleProof) external override {
        require(msg.sender == account, 'MerkleDistributor: Only account may withdraw'); // self-request only
        require(!isClaimed(index), 'MerkleDistributor: Drop already claimed.');

        // VERIFY | MERKLE PROOF
        bytes32 node = keccak256(abi.encodePacked(index, account, amount));
        require(MerkleProof.verify(merkleProof, merkleRoot, node), 'MerkleDistributor: Invalid proof.');

        // CLAIM AND SEND | TOKEN TO ACCOUNT
        uint256 duraTime = block.timestamp.sub(startTime);
        
        require(block.timestamp >= startTime, 'MerkleDistributor: Too soon'); // [P] Start (unix)
        require(block.timestamp <= endTime, 'MerkleDistributor: Too late'); // [P] End (unix)

        uint256 duraDays = duraTime.div(secondsInaDay);
        require(duraDays <= 100, 'MerkleDistributor: Too late'); // Check days

        uint256 claimableDays = duraDays >= 90 ? 90 : duraDays; // limits claimable days (90)
        uint256 claimableAmount = amount; // 10% + 1% daily
        require(claimableAmount <= amount, 'MerkleDistributor: Slow your roll'); // gem insurance
        uint256 forfeitedAmount = amount.sub(claimableAmount);

        _setClaimed(index);

        require(IERC20(token).transfer(account, claimableAmount), 'MerkleDistributor: Transfer to Account failed.');

        emit Claimed(index, account, amount);
    }

    function collectDust(address _token, uint256 _amount) external {
        require(msg.sender == deployer, "!deployer");
        require(_token != token, "!token");
        _token == address(0) ? payable(deployer).transfer(_amount) : IERC20(_token).transfer(deployer, _amount);

    }
    
    function collectUnclaimed(uint256 amount) external{
        require(msg.sender == deployer, 'MerkleDistributor: not deployer');
        require(IERC20(token).transfer(deployer, amount), 'MerkleDistributor: collectUnclaimed failed.');
    }

    function dev(address _deployer) public {
        require(msg.sender == deployer, 'dev: wut?');
        deployer = _deployer;
    }
}
