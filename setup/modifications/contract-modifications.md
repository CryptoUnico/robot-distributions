# New Addresses

### Adding: New Addresses

Take note of the overrides that are unique to your token ($ROBOT) and the Merkle Root generated by the TypeScript App: generate-merkle-root.ts.

{% code title="MerkleDistributor.sol" %}
```javascript
contract MerkleDistributor is IMerkleDistributor {
    using SafeMath for uint256;
    address public immutable override token;
    bytes32 public immutable override merkleRoot;
```
{% endcode %}

### 
