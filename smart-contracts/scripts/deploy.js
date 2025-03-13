const { ethers } = require("hardhat");

async function main() {
    const AiFinance = await ethers.getContractFactory("AiFinance");
    const aiFinance = await AiFinance.deploy();
    await aiFinance.deployed();
    console.log("AiFinance deployed to:", aiFinance.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
