import { expect } from "chai";
import { add, subtract, multiply, divide } from "../src/mathUtils.js";

describe("mathUtils — basic mathematical operations", () => {
  describe("add()", () => {
    it("should correctly add two positive numbers", () => {
      expect(add(2, 3)).to.equal(5);
    });
  });

  describe("subtract()", () => {
    it("should correctly subtract two numbers", () => {
      expect(subtract(10, 4)).to.equal(6);
    });
  });

  describe("multiply()", () => {
    it("should correctly multiply two numbers", () => {
      expect(multiply(3, 4)).to.equal(12);
    });
  });

  describe("divide()", () => {
    it("should correctly divide two numbers", () => {
      expect(divide(6, 2)).to.equal(3);
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => divide(5, 0)).to.throw("Cannot divide by zero");
    });
  });
});
