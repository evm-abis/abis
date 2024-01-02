import { narrow } from 'abitype';

/**
 * [OpenZeppelin-IBeacon](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/proxy/beacon/IBeacon.sol)
 */
export const iBeaconAbi = narrow([
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]);
