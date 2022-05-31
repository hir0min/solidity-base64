import { expect } from "chai";
import { utils } from "ethers";
import { ethers } from "hardhat";
import { Base64Test } from "../typechain";

describe("Base64URL tests", function () {
  let base64Test: Base64Test;

  before(async () => {
    const base64Factory = await ethers.getContractFactory("Base64Test");
    base64Test = await base64Factory.deploy();
  });

  describe("Encode", function () {
    it("should convert to base64URL encoded string with double padding", async function () {
      const testMsg = "light wor";
      const input = utils.toUtf8Bytes(testMsg);
      const encoded = await base64Test.encodeBase64Std(input);
      expect(encoded).deep.equal("bGlnaHQgd29y");
    });

    it("should convert to base64URL encoded string with single padding", async function () {
      const testMsg = "light work.";
      const input = utils.toUtf8Bytes(testMsg);
      const encoded = await base64Test.encodeBase64Std(input);
      expect(encoded).deep.equal("bGlnaHQgd29yay4=");
    });

    it("should convert to base64URL encoded string without padding", async function () {
      const testMsg = "light work";
      const input = utils.toUtf8Bytes(testMsg);
      const encoded = await base64Test.encodeBase64Std(input);
      expect(encoded).deep.equal("bGlnaHQgd29yaw==");
    });
  });

  describe("Decode", function () {
    it("should decode base64URL encoded string with double padding", async function () {
      const encoded = "bGlnaHQgd29y";
      const bytesMsg = await base64Test.decodeBase64Std(encoded);
      expect(utils.toUtf8String(bytesMsg)).deep.equal("light wor");
    });

    it("should decode base64URL encoded string with single padding", async function () {
      const encoded = "bGlnaHQgd29yay4=";
      const bytesMsg = await base64Test.decodeBase64Std(encoded);
      expect(utils.toUtf8String(bytesMsg)).deep.equal("light work.");
    });

    it("should decode base64URL encoded string without padding", async function () {
      const encoded = "bGlnaHQgd29yaw==";
      const bytesMsg = await base64Test.decodeBase64Std(encoded);
      expect(utils.toUtf8String(bytesMsg)).deep.equal("light work");
    });
  });
});
