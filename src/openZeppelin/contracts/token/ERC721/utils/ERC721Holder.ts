import { narrow } from 'abitype';

/**
 * [ERC-721: Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721)
 * [OpenZeppelin-ERC721Holder](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721/utils/ERC721Holder.sol)
 */
export const erc721HolderAbi = narrow([
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC721Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]);
