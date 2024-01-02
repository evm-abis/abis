import { narrow } from 'abitype';

/**
 * [OpenZeppelin-EnumerableMap](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/utils/structs/EnumerableMap.sol)
 */
export const enumerableMapAbi = narrow([
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'key',
        type: 'bytes32',
      },
    ],
    name: 'EnumerableMapNonexistentKey',
    type: 'error',
  },
]);
