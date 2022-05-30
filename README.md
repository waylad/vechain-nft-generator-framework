# Demo Video: https://youtu.be/CM795rgAw-Q

# What is Vechain NFT Generator Framework ?

Vechain NFT Generator is a toolbox meant to be used for the generation and minting of large collections (e.g. 10,000) of unique NFTs.
Input SVG layers of your NFTs and the generator will combine them automatically into unique merged SVG images with metadata and upload them to IPFS.
Then use the provided smart contract minter to create the NFTs on VeChain.

# How to use the Vechain NFT Generator Framework ?

The repository is made of 2 folders:
- The `generator` that will assemble your SVG parts into unique merged images with metadata, and upload them to IPFS.
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
yarn start
```

You will see each combination being generated and uploaded to IPFS :
```
Ship 3000 uploaded to ipfs://QmTA9YxDVAu6mL7YKMMvp1RFZPdPcm2QkQH7qY9Yif4vLn
Ship 2100 uploaded to ipfs://Qmdfvsvbga64a4jsYEp8cmUVd7wjX9RKGCnUkzGrPdJ23j
Ship 3200 uploaded to ipfs://QmRJV15EV7x4bocTmC3zcMeqmr5UEuEhqUPuymSWibEdCf
Ship 0200 uploaded to ipfs://QmWSARtMtktrC8TH2A2m8u6RERk1FXtXyWnrwGwUH9yae1
Ship 3100 uploaded to ipfs://QmVDQARVgXJ7XFjyVeM2x6PQXo7x3G7bkqkWAFPu5cVTQU
Ship 0300 uploaded to ipfs://QmUDobEALHd8jZzPQ2is9xW6K5SmbZAJKWZkTUcKuGbpUY
Ship 1200 uploaded to ipfs://QmZ1mdinVCQhz8a8Sg3E25bVfwFpf7y9T9Hjx4jshaViVG
...
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

