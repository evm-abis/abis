import { narrow } from 'abitype';

/**
 * [OpenZeppelin-ReentrancyGuard](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/utils/ReentrancyGuard.sol)
 */
export const reentrancyGuardAbi = narrow([
  {
    inputs: [],
    name: 'ReentrancyGuardReentrantCall',
    type: 'error',
  },
]);
