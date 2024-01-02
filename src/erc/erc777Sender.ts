import { narrow } from 'abitype';

/**
 * [ERC-777: Token Standard](https://eips.ethereum.org/EIPS/eip-777)
 */
export const erc777SenderAbi = narrow([
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'userData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'operatorData',
        type: 'bytes',
      },
    ],
    name: 'tokensToSend',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]);
