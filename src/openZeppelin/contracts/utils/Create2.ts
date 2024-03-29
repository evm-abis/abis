import { narrow } from 'abitype';

/**
 * [OpenZeppelin-Create2](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/utils/Create2.sol)
 */
export const create2Abi = narrow([
  {
    inputs: [],
    name: 'Create2EmptyBytecode',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Create2FailedDeployment',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'needed',
        type: 'uint256',
      },
    ],
    name: 'Create2InsufficientBalance',
    type: 'error',
  },
]);
