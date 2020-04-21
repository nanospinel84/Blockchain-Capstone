# Real Estate Marketplace

> In this project you will be minting your own tokens to represent your title to the properties. Before you mint a token, you need to verify you own the property. You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property. 
> 
> Once the token has been verified you will place it on a blockchain market place (OpenSea) for others to purchase. Let's get started!

## Token

Name: NanoRealEstateToken<br>
Symbol: NRET<br>
Token Address: [0xCDF0F4Cfdec7A6cD28C811197fADc4E6b3aE39B4](https://rinkeby.etherscan.io/token/0xCDF0F4Cfdec7A6cD28C811197fADc4E6b3aE39B4)


## OpenSea

Original Owner: [0xD6e7CE908050ED7C77c5d4A52950779B8929B556](https://rinkeby.opensea.io/accounts/0xD6e7CE908050ED7C77c5d4A52950779B8929B556)<br>
Buyer of 5 Listings: [0x82128Cb86DfE1A70ECd00291f3B5f0A6d21D5fd1](https://rinkeby.opensea.io/accounts/0x82128Cb86DfE1A70ECd00291f3B5f0A6d21D5fd1)<br>

Buy Transaction 1: [0x7e3ea85e249070b103a1376d9fdc4c49b9b73bb7db52d4856ed20b89f13c9357](https://rinkeby.etherscan.io/tx/0x7e3ea85e249070b103a1376d9fdc4c49b9b73bb7db52d4856ed20b89f13c9357)<br>

Buy Transaction 2: [0x071c9eb445c9167b9a9432ba0de3d199ff4ae1c52acee3ba97316ee8f7913b49](https://rinkeby.etherscan.io/tx/0x071c9eb445c9167b9a9432ba0de3d199ff4ae1c52acee3ba97316ee8f7913b49)<br>

Buy Transaction 3: [0xfc3a84e6b31c0026a5d10f242724d638bb93dae0ce680377e6576f6bec38499f](https://rinkeby.etherscan.io/tx/0xfc3a84e6b31c0026a5d10f242724d638bb93dae0ce680377e6576f6bec38499f)<br>

Buy Transaction 4: [0xd95e726bafa7b9972927c27894ef597e50db05e4aa213ac0f11fb0b62b35076e](https://rinkeby.etherscan.io/tx/0xd95e726bafa7b9972927c27894ef597e50db05e4aa213ac0f11fb0b62b35076e)<br>

Buy Transaction 5: [0x621099efc4f046d726f15734c5834bfe2bee9b2241ae3dd0d7b264bed9f7f695](https://rinkeby.etherscan.io/tx/0x621099efc4f046d726f15734c5834bfe2bee9b2241ae3dd0d7b264bed9f7f695)<br>



## Contracts

[SolnSquareVerifier Contract](https://rinkeby.etherscan.io/address/0xCDF0F4Cfdec7A6cD28C811197fADc4E6b3aE39B4)<br>
[Verifier Contract](https://rinkeby.etherscan.io/address/0x312fAaf73468441730cd06f10cBA85d61c8DD4Cf)<br>
[NanoRealEstateToken Contract](https://rinkeby.etherscan.io/address/0xb062Dd463E07C69b97f98Ede7Ac9C8779e1D6DD1)


```bash

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x4074216bf5e12c7e10d5680886cb07b89c03478161c370a309ab0a651f729fed
   > Blocks: 0            Seconds: 12
   > contract address:    0x312fAaf73468441730cd06f10cBA85d61c8DD4Cf
   > block number:        6351680
   > block timestamp:     1587430610
   > account:             0xD6e7CE908050ED7C77c5d4A52950779B8929B556
   > balance:             18.68360503
   > gas used:            1029658 (0xfb61a)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01029658 ETH


   Deploying 'NanoRealEstateToken'
   -------------------------------
   > transaction hash:    0xa7c034013a9ed4c88a5641a2ca23e6422ed09aee337e8b458e2f7772d875013a
   > Blocks: 0            Seconds: 8
   > contract address:    0xb062Dd463E07C69b97f98Ede7Ac9C8779e1D6DD1
   > block number:        6351681
   > block timestamp:     1587430625
   > account:             0xD6e7CE908050ED7C77c5d4A52950779B8929B556
   > balance:             18.65369144
   > gas used:            2991359 (0x2da4ff)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02991359 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x9b28c6505dbbb1394b4af6503de65c587f22a3f1251571f67c283e5581f307c6
   > Blocks: 0            Seconds: 8
   > contract address:    0xCDF0F4Cfdec7A6cD28C811197fADc4E6b3aE39B4
   > block number:        6351682
   > block timestamp:     1587430640
   > account:             0xD6e7CE908050ED7C77c5d4A52950779B8929B556
   > balance:             18.61800741
   > gas used:            3568403 (0x367313)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03568403 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0758942 ETH


Summary
=======
> Total deployments:   4
> Final cost:          0.17541242 ETH


```

## dApp

I created a simple dApp to mint tokens, which can be viewed in the `dapp` directory.


## Testing

1. `cd eth-contracts` directory
1. Run `truffle compile && truffle migrate --reset`
1. run `truffle test`

Contract artifacts including ABI can be found in `eth-contracts/build/contracts`

## Versions

### Truffle

```bash
nano@nano-linux:~/projects/nodejs/udacity/project3/Blockchain-Capstone/zokrates$ truffle version
Truffle v5.1.22 (core: 5.1.22)
Solidity v0.5.16 (solc-js)
Node v10.15.3
Web3.js v1.2.1
```

### Docker

```bash
Client: Docker Engine - Community
 Version:           19.03.1
 API version:       1.40
 Go version:        go1.12.5
 Git commit:        74b1e89
 Built:             Thu Jul 25 21:18:17 2019
 OS/Arch:           darwin/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.1
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.5
  Git commit:       74b1e89
  Built:            Thu Jul 25 21:17:52 2019
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          v1.2.6
  GitCommit:        894b81a4b802e4eb2a91d1ce216b8817763c29fb
 runc:
  Version:          1.0.0-rc8
  GitCommit:        425e105d5a03fabd737a126ad93d62a9eeede87f
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683
  ```
  
