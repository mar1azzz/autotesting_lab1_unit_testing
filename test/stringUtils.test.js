import { expect } from "chai";
import { capitalize, reverseString, isPalindrome } from "../src/stringUtils.js";

describe("stringUtils — string manipulation utilities", () => {
  describe("capitalize()", () => {
    it("should capitalize the first character of a lowercase word", () => {
      expect(capitalize("test")).to.equal("Test");
    });

    it("should throw an error if input is not a string", () => {
      expect(() => capitalize(123)).to.throw("Input must be a string");
    });
  });

  describe("reverseString()", () => {
    it("should reverse the given string correctly", () => {
      expect(reverseString("abc")).to.equal("cba");
    });

    it("should throw an error if input is not a string", () => {
      expect(() => reverseString(null)).to.throw("Input must be a string");
    });
  });

  describe("isPalindrome()", () => {
    it("should return true for a palindrome string", () => {
      expect(isPalindrome("madam")).to.be.true;
    });

    it("should return false for a non-palindrome string", () => {
      expect(isPalindrome("hello")).to.be.false;
    });

    it("should throw an error if input is not a string", () => {
      expect(() => isPalindrome({})).to.throw("Input must be a string");
    });
  });
});
