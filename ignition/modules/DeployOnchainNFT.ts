import { ethers } from "hardhat";

async function main() {
  const OnchainNFT = await ethers.getContractFactory("OnchainNFT");

  const nft = await OnchainNFT.deploy();
  await nft.waitForDeployment();

  const address = await nft.getAddress();

  console.log("OnchainNFT deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
