import { narrow } from 'abitype';

/**
 * [ERC-5313: Light Contract Ownership](https://eips.ethereum.org/EIPS/eip-5313)
 */
export const erc5313Abi = narrow([
  {
    inputs: [],
    name: 'owner',
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
]);
