import { narrow } from 'abitype';

/**
 * [OpenZeppelin-AccessManaged](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/access/manager/AccessManaged.sol)
 */
export const accessManagedAbi = narrow([
  {
    inputs: [
      {
        internalType: 'address',
        name: 'authority',
        type: 'address',
      },
    ],
    name: 'AccessManagedInvalidAuthority',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'delay',
        type: 'uint32',
      },
    ],
    name: 'AccessManagedRequiredDelay',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
    ],
    name: 'AccessManagedUnauthorized',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'authority',
        type: 'address',
      },
    ],
    name: 'AuthorityUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'authority',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isConsumingScheduledOp',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newAuthority',
        type: 'address',
      },
    ],
    name: 'setAuthority',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]);
