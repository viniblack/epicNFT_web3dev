const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT")
  const nftContract = await nftContractFactory.deploy()
  await nftContract.deployed()
  console.log("Contrato implantado em:", nftContract.address)
  // Chama a função.
  let txn = await nftContract.makeAnEpicNFT()
  // Espera ela ser minerada.
  await txn.wait()
  console.log("Cunhou NFT #1")
}
const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
runMain()