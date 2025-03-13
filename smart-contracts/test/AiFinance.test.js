const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AiFinance Token", function () {
    it("Should deploy and have initial supply", async function () {
        const AiFinance = await ethers.getContractFactory("AiFinance");
        const aiFinance = await AiFinance.deploy();
        await aiFinance.deployed();

        const totalSupply = await aiFinance.totalSupply();
        expect(totalSupply).to.equal(ethers.utils.parseEther("1000000"));
    });
});
