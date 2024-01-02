import { narrow } from 'abitype';

/**
 * [ERC-1967: Proxy Storage Slots](https://eips.ethereum.org/EIPS/eip-1967)
 * [OpenZeppelin-ERC1967Utils](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/proxy/ERC1967/ERC1967Utils.sol)
 */
export const erc1967UtilsAbi = narrow([
  {
    inputs: [
      {
        internalType: 'address',
        name: 'admin',
        type: 'address',
      },
    ],
    name: 'ERC1967InvalidAdmin',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'ERC1967InvalidBeacon',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'ERC1967InvalidImplementation',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC1967NonPayable',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'previousAdmin',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
    ],
    name: 'BeaconUpgraded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'Upgraded',
    type: 'event',
  },
]);
