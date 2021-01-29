export const merkle = {
  //  contractAddress: "", // MAIN NET
  contractAddress: "0x124B06C5ce47De7A6e9EFDA71a946717130079E6", // RINKEBY
  contractABI: [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "_merkleRoot",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "CancelDrop",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Claimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "NewDrop",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "cancelDrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cancelled",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes32[]",
          "name": "merkleProof",
          "type": "bytes32[]"
        }
      ],
      "name": "claim",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "isClaimed",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "merkleRoot",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_merkleRoot",
          "type": "bytes32"
        }
      ],
      "name": "newDrop",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  startTimestamp: 1611819800,
  merkleRoot: 0xe4459b65a0d42741283cc9b65c353c788b449a65eeba951fdfc8c17605dd4616,
  tokenTotal: 0xc4f200cb8a82240000,
  claims: {
    "0x00000000005dbcB0d0513FcDa746382Fe8a53468": {
      "index": 0,
      "amount": "0x16c4abbebea0100000",
      "proof": [
        "0xab9f55a701495a630a574c56ae64769d024db7c316419f023f861c59ddc78d9b",
        "0x50cc7ea5f37e01ea7c936b5d26925ce8963a6a9acb9fb2d8db5e881739914870",
        "0x7b921aa448b950be4e11c22b936189646ff95876390199a0bbfe8d4fa0f44d95",
        "0x377360247a2c22eb9bdac175f44079ccf8a4b4c9a94b8b71e0088e89ab59dd3b"
      ]
    },
    "0x05fc93DeFFFe436822100E795F376228470FB514": {
      "index": 1,
      "amount": "0x0f3ba88b32bcc40000",
      "proof": [
        "0x61ccffa3335530d0c6f6a8f466d26246f73ca0915e61d6c0b46f580ff19639d9",
        "0x7e828475b44e9b505063712c1d3c43a3291986a5b1a3c3c96a534b56c9462d96",
        "0x1494eae231a823bbc3fe89409f2a752214c8438d06560ad50fc8f4ff1e7c3b3c",
        "0xef6321a2e032d227cff63d6780e95bcf1749c8b34228d0e9e53116e923ea2995"
      ]
    },
    "0x19FF17645bd4930745e632284422555466675e44": {
      "index": 2,
      "amount": "0x241a9b4f617a280000",
      "proof": [
        "0xfb007b3bfb96297ba2fa2af644dc4e58142277aae7fcc189fd8e2f7aaf796c9d",
        "0x5f86bee60b783b1ffcf379a6c5e09f3974ac971b9ef588aa1a99b20d17971ddb",
        "0x377360247a2c22eb9bdac175f44079ccf8a4b4c9a94b8b71e0088e89ab59dd3b"
      ]
    },
    "0x20eE60d761de96b1e7FA4EBDfeF5700e9844955A": {
      "index": 3,
      "amount": "0x241a9b4f617a280000",
      "proof": [
        "0x2d716d24b0350ef233087aebcea951ceee8c36b692c83568a975e25cf34f383a",
        "0xaea7d59531b6fd634af044dd890e8a0072e60443981f8e0933b13d07c568e133",
        "0x1494eae231a823bbc3fe89409f2a752214c8438d06560ad50fc8f4ff1e7c3b3c",
        "0xef6321a2e032d227cff63d6780e95bcf1749c8b34228d0e9e53116e923ea2995"
      ]
    },
    "0x57E7c6B647C004CFB7A38E08fDDef09Af5Ea55eD": {
      "index": 4,
      "amount": "0x01a055690d9db80000",
      "proof": [
        "0x3b914c7654ccf28f8e5485c33a6070b91162410743ccfe01cdc77baaead2085e",
        "0xaea7d59531b6fd634af044dd890e8a0072e60443981f8e0933b13d07c568e133",
        "0x1494eae231a823bbc3fe89409f2a752214c8438d06560ad50fc8f4ff1e7c3b3c",
        "0xef6321a2e032d227cff63d6780e95bcf1749c8b34228d0e9e53116e923ea2995"
      ]
    },
    "0x6E9Ead46916950088E236A77bb7b6309170827CA": {
      "index": 5,
      "amount": "0x0929589c9981040000",
      "proof": [
        "0xd12bb44a1a7ce132a29b4c72793d0ea6adbd86a179cb8e48858c6f8ae1002505",
        "0x5f86bee60b783b1ffcf379a6c5e09f3974ac971b9ef588aa1a99b20d17971ddb",
        "0x377360247a2c22eb9bdac175f44079ccf8a4b4c9a94b8b71e0088e89ab59dd3b"
      ]
    },
    "0x6b6C7139B48156d7EC90eD4c55C56bDFCB1C19D2": {
      "index": 6,
      "amount": "0x02a802f8630a240000",
      "proof": [
        "0x68fe26fe9bf493714894a15dffacc5bb8e637eef0a763aaac0ec8b7934ae4b60",
        "0x7e828475b44e9b505063712c1d3c43a3291986a5b1a3c3c96a534b56c9462d96",
        "0x1494eae231a823bbc3fe89409f2a752214c8438d06560ad50fc8f4ff1e7c3b3c",
        "0xef6321a2e032d227cff63d6780e95bcf1749c8b34228d0e9e53116e923ea2995"
      ]
    },
    "0x7C262baf13794f54e3514539c411f92716996C38": {
      "index": 7,
      "amount": "0x030927f74c9de00000",
      "proof": [
        "0x00578d4eb311a39bcad892de847528a54be9bfca19a254ed9e64bca76ef00284",
        "0x28cbee4e6d215f7af5f58665aa576b02eb882034ea2815c5ea74686def29b6c1",
        "0xbdd483679bbf2bb73f41add93e948b4d4ce26a5c637558cdfb030115063cbb71",
        "0xef6321a2e032d227cff63d6780e95bcf1749c8b34228d0e9e53116e923ea2995"
      ]
    },
    "0x7D13f07889F04a593a3E12f5d3f8Bf850d07465B": {
      "index": 8,
      "amount": "0x0b6255df5f50080000",
      "proof": [
        "0x02ec1a32c6fc744039a56374ccea1c37a3a2d2f711221a577e36d8ba62057abd",
        "0x1d206b63c8473b852592942f0d8f8c77adc9d57181a3df8c760ef8483a8896fb",
        "0xbdd483679bbf2bb73f41add93e948b4d4ce26a5c637558cdfb030115063cbb71",
        "0xef6321a2e032d227cff63d6780e95bcf1749c8b34228d0e9e53116e923ea2995"
      ]
    },
    "0xC7AA922f0823DeE2eD721E61ebCCF2F9596017Fb": {
      "index": 9,
      "amount": "0x0735beeb55f6f40000",
      "proof": [
        "0x277f798e58060d47e152e98a0a117455b4fe847c97697578e58fad4c7262f2f0",
        "0x1d206b63c8473b852592942f0d8f8c77adc9d57181a3df8c760ef8483a8896fb",
        "0xbdd483679bbf2bb73f41add93e948b4d4ce26a5c637558cdfb030115063cbb71",
        "0xef6321a2e032d227cff63d6780e95bcf1749c8b34228d0e9e53116e923ea2995"
      ]
    },
    "0xE7fA80757FeAb870E0bF3b3dc8d4647f403A65ac": {
      "index": 10,
      "amount": "0x12f939c99edab80000",
      "proof": [
        "0x6dc54491a736d39443fdc3f3948659f08585014027d262261d36ba7b68690a55",
        "0x8f2659935b102672665c90f0eee93b87ad1ce4681316eb3353a772ca7ffbf41c",
        "0x7b921aa448b950be4e11c22b936189646ff95876390199a0bbfe8d4fa0f44d95",
        "0x377360247a2c22eb9bdac175f44079ccf8a4b4c9a94b8b71e0088e89ab59dd3b"
      ]
    },
    "0xFd63Bf84471Bc55DD9A83fdFA293CCBD27e1F4C8": {
      "index": 11,
      "amount": "0x16c4abbebea0100000",
      "proof": [
        "0xb46bed3818d9e2f70ed771f89d2898f0e86044a877a85e893ebab3fdc82652de",
        "0x50cc7ea5f37e01ea7c936b5d26925ce8963a6a9acb9fb2d8db5e881739914870",
        "0x7b921aa448b950be4e11c22b936189646ff95876390199a0bbfe8d4fa0f44d95",
        "0x377360247a2c22eb9bdac175f44079ccf8a4b4c9a94b8b71e0088e89ab59dd3b"
      ]
    },
    "0xb86739476a4820FcC39Ff1C413d9af0b96c1589F": {
      "index": 12,
      "amount": "0x0579a814e10a740000",
      "proof": [
        "0x00902affa580c7ef70a63dca71ddda3fa0640088fb267aac43bee4e7341bedba",
        "0x28cbee4e6d215f7af5f58665aa576b02eb882034ea2815c5ea74686def29b6c1",
        "0xbdd483679bbf2bb73f41add93e948b4d4ce26a5c637558cdfb030115063cbb71",
        "0xef6321a2e032d227cff63d6780e95bcf1749c8b34228d0e9e53116e923ea2995"
      ]
    },
    "0xf66705E0Ae4e5DfC02b2633356f5305662F00d3b": {
      "index": 13,
      "amount": "0x0471fa858b9e080000",
      "proof": [
        "0x933e5015996efffd3fb8783e30ed49e77cdc199162a4b136404afa0d368e109f",
        "0x8f2659935b102672665c90f0eee93b87ad1ce4681316eb3353a772ca7ffbf41c",
        "0x7b921aa448b950be4e11c22b936189646ff95876390199a0bbfe8d4fa0f44d95",
        "0x377360247a2c22eb9bdac175f44079ccf8a4b4c9a94b8b71e0088e89ab59dd3b"
      ]
    }
  }
};
