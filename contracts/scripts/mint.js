// Contracts
const Minter = artifacts.require("Minter")

module.exports = async function(callback) {
  try {
    const accounts = await web3.eth.getAccounts()
    const minter = await Minter.deployed()
    console.log('Minter fetched', minter.address)
    const user = accounts[0]

    await minter.mint(user, 'ipfs://1412412dewdwewfwef', { from: user })
    console.log(`NFT minted by ${user}`)
  }
  catch(error) {
    console.log(error)
  }

  callback()
}