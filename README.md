# What is Vechain NFT Generator ?

This toolbox is meant to be used for the generation and minting of large collections of unique NFTs.
Input SVG parts of your NFTs and the generator will combine them automaticly into unique fused SVG and upload them to IPFS.
Then use the provider contract minter to create the NFTs on Vechain.

# How to use the Vechain NFT Generator ?

The repository is made of 2 folders:
- The `generator` that will assemble your SVG parts into unique fused images metadata, and upload them to IPFS.
- The `contracts` folder that contains an NFT minter runing on Vechain

## Step 1: Generate the images and metadata and upload them to IPFS

You will need an IPFS API key with Infura to proceed. Go to https://infura.io/product/ipfs and register an account.
Then rename `.env.example` as `.env` and enter your Infura IPFS credentials:

```
INFURA_API_ID=
INFURA_API_SECRET=
```

Now put all yours layers into the `layers` folder configure `index.js` with your layers combinations and ordering. (In future version, this process could be much better streamlined. In this example just leave `layers` and `index.js` as offered.)

Now install dependancies and run the generator :

```
yarn install
yar start
```

You will see each combination being generated and uploaded to IPFS :
```

```

Check out the generated `out` folder to see all the genrated images and metadata.


## Mint the NFTs

Run web3-gear (replace `<password>` with your password)
```
web3-gear --host 127.0.0.1 --port 8545 --endpoint https://sync-testnet.vechain.org --keystore ./keystore --passcode <password>
```

Deploy the Minter contract
```
npx truffle migrate --network testnet --reset
```

Modify `scripts/mint.js` with an IPFS link generated previouly to mint that NFT then run the truffle script:
```
npx truffle exec scripts/mint.js --network testnet
```

Futur versions will include a script to mint the whole collection at once.

