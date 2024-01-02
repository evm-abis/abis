import { narrow } from 'abitype';

/**
 * [OpenZeppelin-SafeCast](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/utils/math/SafeCast.sol)
 */
export const safeCastAbi = narrow([
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'bits',
        type: 'uint8',
      },
      {
        internalType: 'int256',
        name: 'value',
        type: 'int256',
      },
    ],
    name: 'SafeCastOverflowedIntDowncast',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'int256',
        name: 'value',
        type: 'int256',
      },
    ],
    name: 'SafeCastOverflowedIntToUint',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'bits',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SafeCastOverflowedUintDowncast',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SafeCastOverflowedUintToInt',
    type: 'error',
  },
]);
