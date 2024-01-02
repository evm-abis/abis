import { narrow } from 'abitype';

/**
 * [OpenZeppelin-ECDSA](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/utils/cryptography/ECDSA.sol)
 */
export const eCDSAAbi = narrow([
  {
    inputs: [],
    name: 'ECDSAInvalidSignature',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'length',
        type: 'uint256',
      },
    ],
    name: 'ECDSAInvalidSignatureLength',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'ECDSAInvalidSignatureS',
    type: 'error',
  },
]);
