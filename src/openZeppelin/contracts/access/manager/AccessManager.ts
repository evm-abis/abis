import { narrow } from 'abitype';

/**
 * [OpenZeppelin-AccessManager](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/access/manager/AccessManager.sol)
 */
export const accessManagerAbi = narrow([
  {
    inputs: [
      {
        internalType: 'address',
        name: 'initialAdmin',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'operationId',
        type: 'bytes32',
      },
    ],
    name: 'AccessManagerAlreadyScheduled',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AccessManagerBadConfirmation',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'operationId',
        type: 'bytes32',
      },
    ],
    name: 'AccessManagerExpired',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'initialAdmin',
        type: 'address',
      },
    ],
    name: 'AccessManagerInvalidInitialAdmin',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'AccessManagerLockedAccount',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
    ],
    name: 'AccessManagerLockedRole',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'operationId',
        type: 'bytes32',
      },
    ],
    name: 'AccessManagerNotReady',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'operationId',
        type: 'bytes32',
      },
    ],
    name: 'AccessManagerNotScheduled',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'msgsender',
        type: 'address',
      },
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
    ],
    name: 'AccessManagerUnauthorizedAccount',
    type: 'error',
  },
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
    name: 'AccessManagerUnauthorizedCall',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'msgsender',
        type: 'address',
      },
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
    name: 'AccessManagerUnauthorizedCancel',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AccessManagerUnauthorizedConsume',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'AddressInsufficientBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'bits',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'SafeCastOverflowedUintDowncast',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'operationId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'nonce',
        type: 'uint32',
      },
    ],
    name: 'OperationCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'operationId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'nonce',
        type: 'uint32',
      },
    ],
    name: 'OperationExecuted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'operationId',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'nonce',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint48',
        name: 'schedule',
        type: 'uint48',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'OperationScheduled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'admin',
        type: 'uint64',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'delay',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint48',
        name: 'since',
        type: 'uint48',
      },
    ],
    name: 'RoleGrantDelayChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'delay',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint48',
        name: 'since',
        type: 'uint48',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'newMember',
        type: 'bool',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'guardian',
        type: 'uint64',
      },
    ],
    name: 'RoleGuardianChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'label',
        type: 'string',
      },
    ],
    name: 'RoleLabel',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'delay',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint48',
        name: 'since',
        type: 'uint48',
      },
    ],
    name: 'TargetAdminDelayUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'closed',
        type: 'bool',
      },
    ],
    name: 'TargetClosed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4',
      },
      {
        indexed: true,
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
    ],
    name: 'TargetFunctionRoleUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ADMIN_ROLE',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PUBLIC_ROLE',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
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
        name: 'immediate',
        type: 'bool',
      },
      {
        internalType: 'uint32',
        name: 'delay',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
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
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'cancel',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'consumeScheduledOp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'execute',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'expiration',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getAccess',
    outputs: [
      {
        internalType: 'uint48',
        name: 'since',
        type: 'uint48',
      },
      {
        internalType: 'uint32',
        name: 'currentDelay',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'pendingDelay',
        type: 'uint32',
      },
      {
        internalType: 'uint48',
        name: 'effect',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'getNonce',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
    ],
    name: 'getRoleGrantDelay',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
    ],
    name: 'getRoleGuardian',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'getSchedule',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'getTargetAdminDelay',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
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
    name: 'getTargetFunctionRole',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'executionDelay',
        type: 'uint32',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: 'isMember',
        type: 'bool',
      },
      {
        internalType: 'uint32',
        name: 'executionDelay',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
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
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'hashOperation',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'isTargetClosed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        internalType: 'string',
        name: 'label',
        type: 'string',
      },
    ],
    name: 'labelRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minSetback',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes[]',
        name: 'data',
        type: 'bytes[]',
      },
    ],
    name: 'multicall',
    outputs: [
      {
        internalType: 'bytes[]',
        name: 'results',
        type: 'bytes[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'callerConfirmation',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'uint48',
        name: 'when',
        type: 'uint48',
      },
    ],
    name: 'schedule',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'operationId',
        type: 'bytes32',
      },
      {
        internalType: 'uint32',
        name: 'nonce',
        type: 'uint32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        internalType: 'uint32',
        name: 'newDelay',
        type: 'uint32',
      },
    ],
    name: 'setGrantDelay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: 'admin',
        type: 'uint64',
      },
    ],
    name: 'setRoleAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
      {
        internalType: 'uint64',
        name: 'guardian',
        type: 'uint64',
      },
    ],
    name: 'setRoleGuardian',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'newDelay',
        type: 'uint32',
      },
    ],
    name: 'setTargetAdminDelay',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'closed',
        type: 'bool',
      },
    ],
    name: 'setTargetClosed',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes4[]',
        name: 'selectors',
        type: 'bytes4[]',
      },
      {
        internalType: 'uint64',
        name: 'roleId',
        type: 'uint64',
      },
    ],
    name: 'setTargetFunctionRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newAuthority',
        type: 'address',
      },
    ],
    name: 'updateAuthority',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]);
