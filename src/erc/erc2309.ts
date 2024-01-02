import { narrow } from 'abitype';

/**
 * [ERC-2309: ERC-721 Consecutive Transfer Extension](https://eips.ethereum.org/EIPS/eip-2309)
 */
export const erc2309Abi = narrow([
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'fromTokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'toTokenId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'fromAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'toAddress',
        type: 'address',
      },
    ],
    name: 'ConsecutiveTransfer',
    type: 'event',
  },
]);
