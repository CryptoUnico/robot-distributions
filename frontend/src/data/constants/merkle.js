export const merkle = {
  //  contractAddress: "", // MAIN NET
  contractAddress: "0xd1666190bE4fC9842b12397047B9B8Ad3A5D48c4", // RINKEBY
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
  merkleRoot: "0x7af4830840b2216ceecac0804ba89a06af92bd76cb150b4fd054fb89108689b5",
  tokenTotal: "0xe47ee027f90f7c0000",
  claims: {
    "0x00000000005dbcB0d0513FcDa746382Fe8a53468": {
      "index": 0,
      "amount": "0x16c4abbebea0100000",
      "proof": [
        "0x84f4e49b07e10fab434bee9ed281e591fd48da625577720c3db2c7b684e0f73f",
        "0xd4359124d2a944b42f8e8a9dca71fbbfe43a61e9d21ba8484a0e0dbcb3fcc699",
        "0x4a8e4eaf03ad21a24b60829568ee0e9cbd9418e2d33a3d85b40b10953091c26f",
        "0xc8bd41459c1b48fd71c146a45a025eb440c6a293085fb00baa09b20724d0cde8"
      ]
    },
    "0x05fc93DeFFFe436822100E795F376228470FB514": {
      "index": 1,
      "amount": "0x0f3ba88b32bcc40000",
      "proof": [
        "0x61ccffa3335530d0c6f6a8f466d26246f73ca0915e61d6c0b46f580ff19639d9",
        "0x1d1dcc756ef191c8ed6196b2bec1302d2b97037da3f4dfe2b68cb417a6445fa2",
        "0x189ee294728aa5e0846bb219582fd32979fa9a7f7774f3cc31da49e2991bcb6d",
        "0x6d6a19a8c9f3261f42f1936e519e4f94c0870a183f2907b6feb6efd29d4e0f18"
      ]
    },
    "0x19FF17645bd4930745e632284422555466675e44": {
      "index": 2,
      "amount": "0x241a9b4f617a280000",
      "proof": [
        "0xc551e18b90d96772b048d8bc564fce654608693ff63f279756a67925c629ffa1",
        "0xba3f0c30f21b2734b7e33a91e54faea973f2fb5f4b8453f6cd324563f55e215f",
        "0x4a8e4eaf03ad21a24b60829568ee0e9cbd9418e2d33a3d85b40b10953091c26f",
        "0xc8bd41459c1b48fd71c146a45a025eb440c6a293085fb00baa09b20724d0cde8"
      ]
    },
    "0x20eE60d761de96b1e7FA4EBDfeF5700e9844955A": {
      "index": 3,
      "amount": "0x241a9b4f617a280000",
      "proof": [
        "0x3591397ec3229fd5ee1d20bc5643f47854929f355dfec0cb5991610ec3a63386",
        "0xcef7898f37e338a3f81f155b83b5ef09ee8610f854e02c2a2538ed22dc3f6f6d",
        "0x4a577c4450ea76c46f8bd33f3f9d84aa7cfd21435a215699d4c0b225919eba5c",
        "0x6d6a19a8c9f3261f42f1936e519e4f94c0870a183f2907b6feb6efd29d4e0f18"
      ]
    },
    "0x57E7c6B647C004CFB7A38E08fDDef09Af5Ea55eD": {
      "index": 4,
      "amount": "0x01a055690d9db80000",
      "proof": [
        "0x306a9789f761a47e32e3e4f5c55c45dd6b94717ec9d3a7c8204b2c3ebb87081f",
        "0x4a713c0a97f964f2c9e14e40f659da7364959bc313d5ec58ca7d15409521917c",
        "0x4a577c4450ea76c46f8bd33f3f9d84aa7cfd21435a215699d4c0b225919eba5c",
        "0x6d6a19a8c9f3261f42f1936e519e4f94c0870a183f2907b6feb6efd29d4e0f18"
      ]
    },
    "0x6E9Ead46916950088E236A77bb7b6309170827CA": {
      "index": 5,
      "amount": "0x0929589c9981040000",
      "proof": [
        "0xf3f1a6c204b81640d99646a916bf1ce3779604d4257a3ecd102796ebf266dfe8",
        "0xaacdd53a2ac17cf259ef774a73c85008251fd9f061496fc4c049ac5d2984a06e",
        "0xba792ddeaa07a1a3d472d137ee0cea9b4d36950c9c1be213f333169c2a2b8b2c",
        "0xc8bd41459c1b48fd71c146a45a025eb440c6a293085fb00baa09b20724d0cde8"
      ]
    },
    "0x6b6C7139B48156d7EC90eD4c55C56bDFCB1C19D2": {
      "index": 6,
      "amount": "0x02a802f8630a240000",
      "proof": [
        "0x68fe26fe9bf493714894a15dffacc5bb8e637eef0a763aaac0ec8b7934ae4b60",
        "0x1d1dcc756ef191c8ed6196b2bec1302d2b97037da3f4dfe2b68cb417a6445fa2",
        "0x189ee294728aa5e0846bb219582fd32979fa9a7f7774f3cc31da49e2991bcb6d",
        "0x6d6a19a8c9f3261f42f1936e519e4f94c0870a183f2907b6feb6efd29d4e0f18"
      ]
    },
    "0x705F24F33452D982313cff84f571de71C7D0ca68": {
      "index": 7,
      "amount": "0x08c8339dafed480000",
      "proof": [
        "0x3eaacb55e24ac1e1b4b11bb972f3b2c2e9b28d0f5807388f3b0ee3b5761b3a9f",
        "0xaea7d59531b6fd634af044dd890e8a0072e60443981f8e0933b13d07c568e133",
        "0x189ee294728aa5e0846bb219582fd32979fa9a7f7774f3cc31da49e2991bcb6d",
        "0x6d6a19a8c9f3261f42f1936e519e4f94c0870a183f2907b6feb6efd29d4e0f18"
      ]
    },
    "0x7C262baf13794f54e3514539c411f92716996C38": {
      "index": 8,
      "amount": "0x030927f74c9de00000",
      "proof": [
        "0x3b914c7654ccf28f8e5485c33a6070b91162410743ccfe01cdc77baaead2085e",
        "0xcef7898f37e338a3f81f155b83b5ef09ee8610f854e02c2a2538ed22dc3f6f6d",
        "0x4a577c4450ea76c46f8bd33f3f9d84aa7cfd21435a215699d4c0b225919eba5c",
        "0x6d6a19a8c9f3261f42f1936e519e4f94c0870a183f2907b6feb6efd29d4e0f18"
      ]
    },
    "0x7D13f07889F04a593a3E12f5d3f8Bf850d07465B": {
      "index": 9,
      "amount": "0x0b6255df5f50080000",
      "proof": [
        "0xb46bed3818d9e2f70ed771f89d2898f0e86044a877a85e893ebab3fdc82652de",
        "0xd4359124d2a944b42f8e8a9dca71fbbfe43a61e9d21ba8484a0e0dbcb3fcc699",
        "0x4a8e4eaf03ad21a24b60829568ee0e9cbd9418e2d33a3d85b40b10953091c26f",
        "0xc8bd41459c1b48fd71c146a45a025eb440c6a293085fb00baa09b20724d0cde8"
      ]
    },
    "0x8F942ECED007bD3976927B7958B50Df126FEeCb5": {
      "index": 10,
      "amount": "0x16c4abbebea0100000",
      "proof": [
        "0xd7302f11735c87383d8e121c393294a8e6b1a3b72ffdb31f50229f3d05a12ca8",
        "0x11799a4069feb49a98279daa831777c3a25d864e8931e0bceb338885e3d6509c",
        "0xba792ddeaa07a1a3d472d137ee0cea9b4d36950c9c1be213f333169c2a2b8b2c",
        "0xc8bd41459c1b48fd71c146a45a025eb440c6a293085fb00baa09b20724d0cde8"
      ]
    },
    "0xC7AA922f0823DeE2eD721E61ebCCF2F9596017Fb": {
      "index": 11,
      "amount": "0x0735beeb55f6f40000",
      "proof": [
        "0x2d716d24b0350ef233087aebcea951ceee8c36b692c83568a975e25cf34f383a",
        "0x4a713c0a97f964f2c9e14e40f659da7364959bc313d5ec58ca7d15409521917c",
        "0x4a577c4450ea76c46f8bd33f3f9d84aa7cfd21435a215699d4c0b225919eba5c",
        "0x6d6a19a8c9f3261f42f1936e519e4f94c0870a183f2907b6feb6efd29d4e0f18"
      ]
    },
    "0xE7fA80757FeAb870E0bF3b3dc8d4647f403A65ac": {
      "index": 12,
      "amount": "0x12f939c99edab80000",
      "proof": [
        "0x3e749c48a3257576526297c47ff8793d8c6c7626dfd95f181804ca3c11947687",
        "0xaea7d59531b6fd634af044dd890e8a0072e60443981f8e0933b13d07c568e133",
        "0x189ee294728aa5e0846bb219582fd32979fa9a7f7774f3cc31da49e2991bcb6d",
        "0x6d6a19a8c9f3261f42f1936e519e4f94c0870a183f2907b6feb6efd29d4e0f18"
      ]
    },
    "0xFd63Bf84471Bc55DD9A83fdFA293CCBD27e1F4C8": {
      "index": 13,
      "amount": "0x16c4abbebea0100000",
      "proof": [
        "0xd12bb44a1a7ce132a29b4c72793d0ea6adbd86a179cb8e48858c6f8ae1002505",
        "0xba3f0c30f21b2734b7e33a91e54faea973f2fb5f4b8453f6cd324563f55e215f",
        "0x4a8e4eaf03ad21a24b60829568ee0e9cbd9418e2d33a3d85b40b10953091c26f",
        "0xc8bd41459c1b48fd71c146a45a025eb440c6a293085fb00baa09b20724d0cde8"
      ]
    },
    "0xb86739476a4820FcC39Ff1C413d9af0b96c1589F": {
      "index": 14,
      "amount": "0x0579a814e10a740000",
      "proof": [
        "0xfb007b3bfb96297ba2fa2af644dc4e58142277aae7fcc189fd8e2f7aaf796c9d",
        "0xaacdd53a2ac17cf259ef774a73c85008251fd9f061496fc4c049ac5d2984a06e",
        "0xba792ddeaa07a1a3d472d137ee0cea9b4d36950c9c1be213f333169c2a2b8b2c",
        "0xc8bd41459c1b48fd71c146a45a025eb440c6a293085fb00baa09b20724d0cde8"
      ]
    },
    "0xf66705E0Ae4e5DfC02b2633356f5305662F00d3b": {
      "index": 15,
      "amount": "0x0471fa858b9e080000",
      "proof": [
        "0xe9241f7d5d067cf50ddd71fff0fb93baa5d4cb047713db9e743bc1b2f325796f",
        "0x11799a4069feb49a98279daa831777c3a25d864e8931e0bceb338885e3d6509c",
        "0xba792ddeaa07a1a3d472d137ee0cea9b4d36950c9c1be213f333169c2a2b8b2c",
        "0xc8bd41459c1b48fd71c146a45a025eb440c6a293085fb00baa09b20724d0cde8"
      ]
    }
  }
};
