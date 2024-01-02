import { narrow } from 'abitype';

/**
 * [OpenZeppelin-Proxy](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/proxy/Proxy.sol)
 */
export const proxyAbi = narrow([
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
]);
