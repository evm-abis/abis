import { narrow } from 'abitype';

/**
 * [ERC-1271: Standard Signature Validation Method for Contracts](https://eips.ethereum.org/EIPS/eip-1271)
 */
export const erc1271Abi = narrow([
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'hash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'isValidSignature',
    outputs: [
      {
        internalType: 'bytes4',
        name: 'magicValue',
        type: 'bytes4',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]);
