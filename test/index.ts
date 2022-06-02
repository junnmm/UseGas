import { expect } from "chai";
import { ethers } from "hardhat";
import { UseGas } from "../typechain";

describe("Use Gas", function () {

  let inst:UseGas;

  beforeEach(async()=>{
    const fact = await ethers.getContractFactory("UseGas");
    inst = await fact.deploy();
  });

  it("Use at least 1M gas", async function () {
    
     const tx = await inst.useGas(1_000_000);
     const receipt = await tx.wait();

     expect(receipt.gasUsed,
      `expect ${receipt.gasUsed.toString()} >= 1_000_000`
     ).gte(1_000_000);

  });


  it("Use at least 10M gas", async function () {
    
    const tx = await inst.useGas(10_000_000);
    const receipt = await tx.wait();

    expect(receipt.gasUsed,
     `expect ${receipt.gasUsed.toString()} >= 10_000_000`
    ).gte(10_000_000);

  });

});
