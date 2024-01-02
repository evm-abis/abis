import { narrow } from 'abitype';

/**
 * [OpenZeppelin-Strings](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/utils/Strings.sol)
 */
export const stringsAbi = narrow([
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'length',
        type: 'uint256',
      },
    ],
    name: 'StringsInsufficientHexLength',
    type: 'error',
  },
]);
