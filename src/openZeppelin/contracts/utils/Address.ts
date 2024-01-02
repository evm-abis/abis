import { narrow } from 'abitype';

/**
 * [OpenZeppelin-Address](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/utils/Address.sol)
 */
export const addressAbi = narrow([
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'AddressInsufficientBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
    type: 'error',
  },
]);
