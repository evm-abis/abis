import { narrow } from 'abitype';

/**
 * [OpenZeppelin-IAuthority](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/access/manager/IAuthority.sol)
 */
export const iAuthorityAbi = narrow([
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4',
      },
    ],
    name: 'canCall',
    outputs: [
      {
        internalType: 'bool',
        name: 'allowed',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]);
