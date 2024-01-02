import { narrow } from 'abitype';

/**
 * [ERC-1820: Pseudo-introspection Registry Contract](https://eips.ethereum.org/EIPS/eip-1820)
 */
export const erc1820ImplementerAbi = narrow([
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'interfaceHash',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'canImplementInterfaceForAddress',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]);
