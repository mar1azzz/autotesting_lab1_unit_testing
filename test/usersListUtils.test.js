import { expect } from "chai";
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken,
} from "../src/usersListUtils.js";

describe("usersListUtils — user list processing utilities", () => {
  const users = [
    { id: 1, name: "Alice", age: 25, email: "alice@mail.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@mail.com" },
    { id: 3, name: "Charlie", age: 35, email: "charlie@mail.com" },
  ];

  describe("filterUsersByAge()", () => {
    it("should return users whose age is within the given range", () => {
      const result = filterUsersByAge(users, 26, 34);
      expect(result).to.deep.equal([
        { id: 2, name: "Bob", age: 30, email: "bob@mail.com" },
      ]);
    });

    it("should throw an error if users is not an array", () => {
      expect(() => isEmailTaken(123, "mail@mail.com")).to.throw(
        "Users must be an array"
      );
    });
  });

  describe("sortUsersByName()", () => {
    it("should return a list of users sorted alphabetically by name", () => {
      const result = sortUsersByName(users);
      expect(result.map((u) => u.name)).to.deep.equal([
        "Alice",
        "Bob",
        "Charlie",
      ]);
    });

    it("should throw an error if users is not an array", () => {
      expect(() => sortUsersByName("abc")).to.throw("Users must be an array");
    });
  });

  describe("findUserById()", () => {
    it("should return the user object with the matching id", () => {
      expect(findUserById(users, 2).name).to.equal("Bob");
    });

    it("should return null if no user with the given id is found", () => {
      expect(findUserById(users, 99)).to.be.null;
    });

    it("should throw an error if users is not an array", () => {
      expect(() => findUserById(null, 1)).to.throw("Users must be an array");
    });
  });

  describe("isEmailTaken()", () => {
    it("should return true if email exists in the list", () => {
      expect(isEmailTaken(users, "alice@mail.com")).to.be.true;
    });

    it("should return false if email does not exist in the list", () => {
      expect(isEmailTaken(users, "none@mail.com")).to.be.false;
    });

    it("should throw an error if users is not an array", () => {
      expect(() => isEmailTaken(123, "mail@mail.com")).to.throw(
        "Users must be an array"
      );
    });
  });
});
