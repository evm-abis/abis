import { narrow } from 'abitype';

/**
 * [OpenZeppelin-DoubleEndedQueue](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/utils/structs/DoubleEndedQueue.sol)
 */
export const doubleEndedQueueAbi = narrow([
  {
    inputs: [],
    name: 'QueueEmpty',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QueueFull',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QueueOutOfBounds',
    type: 'error',
  },
]);
