import { expect } from "chai";
import * as checkerModule from "../src/studentKnowledgeCheckerUtil.js";

const checkStudentKnowledge =
  checkerModule.default || checkerModule.checkStudentKnowledge;

describe("studentKnowledgeCheckerUtil — validating student answers", () => {
  describe("checkStudentKnowledge()", () => {
    it("should return true when all answers match the correct ones", () => {
      const student = { q1: "a", q2: "b" };
      const correct = { q1: "a", q2: "b" };
      expect(checkStudentKnowledge(student, correct)).to.be.true;
    });

    it("should return false when the number of questions differs", () => {
      const student = { q1: "a" };
      const correct = { q1: "a", q2: "b" };
      expect(checkStudentKnowledge(student, correct)).to.be.false;
    });

    it("should return false when question keys do not match", () => {
      const student = { q1: "a", qX: "b" };
      const correct = { q1: "a", q2: "b" };
      expect(checkStudentKnowledge(student, correct)).to.be.false;
    });

    it("should return false when at least one answer is incorrect", () => {
      const student = { q1: "a", q2: "x" };
      const correct = { q1: "a", q2: "b" };
      expect(checkStudentKnowledge(student, correct)).to.be.false;
    });
  });
});
