import { narrow } from 'abitype';

/**
 * [OpenZeppelin-ShortStrings](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/utils/ShortStrings.sol)
 */
export const shortStringsAbi = narrow([
  {
    inputs: [],
    name: 'InvalidShortString',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'str',
        type: 'string',
      },
    ],
    name: 'StringTooLong',
    type: 'error',
  },
]);
