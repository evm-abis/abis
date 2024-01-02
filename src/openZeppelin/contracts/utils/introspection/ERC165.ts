import { narrow } from 'abitype';

/**
 * [ERC-165: Standard Interface Detection](https://eips.ethereum.org/EIPS/eip-165)
 * [OpenZeppelin-ERC165](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/utils/introspection/ERC165.sol)
 */
export const erc165Abi = narrow([
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]);
