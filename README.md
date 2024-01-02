# EVM ABIs

## Why This Project?

Currently, obtaining a contract's ABI involves downloading it from Etherscan (or Sourcify) and manually pasting it into your project. Interacting with standard contracts like ERC20 requires either copying the ABI into your project or importing it from libraries like Wagmi. This presents 2 primary issues:

1. Lack of a dedicated package to centralize all ERC/EIP ABIs, independently of a library.
2. No straightforward method to import a contract's ABI into a project.

This project aims to address those problems by consolidating all ERC/EIP ABIs in one repository.

## Installation

Installation is straightforward:

```bash
# npm
npm install -D @evm-abis/abis

# pnpm
pnpm add -D @evm-abis/abis

# yarn
yarn add --dev @evm-abis/abis

# bun
bun add -D @evm-abis/abis
```

After installation, import the ABI as follows:

```javascript
import { erc20Abi } from '@evm-abis/abis'
```

This project leverages the excellent [abitype](https://github.com/wevm/abitype) project to type the ABI.

## Available ABIs
### ERC:
- ERC1155
- ERC1155MetadataURI
- ERC1155Receiver
- ERC1271
- ERC1363
- ERC1363Receiver
- ERC1363Spender
- ERC165
- ERC1820Implementer
- ERC1820Registry
- ERC1967
- ERC20
- ERC20Bytes32
- ERC20Metadata
- ERC20Permit
- ERC2309
- ERC2612
- ERC2981
- ERC3156FlashBorrower
- ERC3156FlashLender
- ERC4626
- ERC4906
- ERC5267
- ERC5313
- ERC5805
- ERC6372
- ERC721
- ERC721Enumerable
- ERC721Metadata
- ERC721Receiver
- ERC777
- ERC777Recipient
- ERC777Sender
- draft-ERC1822
- draft-ERC6093

### EIP:
- EIP712

### OpenZeppelin
- All openZeppelin contracts

### Other
- Mutlicall
