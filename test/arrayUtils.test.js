import { expect } from "chai";
import { findMax, findMin, removeDuplicates } from "../src/arrayUtils.js";

describe("arrayUtils — array operations", () => {
  describe("findMax()", () => {
    it("should return the maximum value from an array of numbers", () => {
      expect(findMax([1, 2, 3])).to.equal(3);
    });

    it("should throw an error if the input is not an array", () => {
      expect(() => findMax("123")).to.throw("Input must be an array");
    });
  });

  describe("findMin()", () => {
    it("should return the minimum value from an array of numbers", () => {
      expect(findMin([5, 2, 8])).to.equal(2);
    });

    it("should throw an error if the input is not an array", () => {
      expect(() => findMin(123)).to.throw("Input must be an array");
    });
  });

  describe("removeDuplicates()", () => {
    it("should remove duplicate values and return a unique array", () => {
      expect(removeDuplicates([1, 1, 2, 3, 3])).to.deep.equal([1, 2, 3]);
    });

    it("should throw an error if the input is not an array", () => {
      expect(() => removeDuplicates(null)).to.throw("Input must be an array");
    });
  });
});
