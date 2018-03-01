const { toUpper } = require("ramda");
const { Lens, over, set, view } = require("../index");
const { expect } = require("chai");

describe("Lens", () => {
  const lens = Lens("name");
  const person = { name: "Judy" };

  describe("#view", () => {
    it("should return 'Judy'", () => {
      const expected = "Judy";
      const actual = view(lens)(person);
      expect(actual).to.equal(expected);
    });
  });
  describe("#over", () => {
    it("should change name to 'JUDY'", () => {
      const expected = "JUDY";
      const actual = over(lens)(toUpper)(person);
      expect(actual.name).to.equal(expected);
    });
  });
  describe("#set", () => {
    it("should change name to 'Sam'", () => {
      const expected = "Sam";
      const actual = set(lens)("Sam")(person);
      expect(actual.name).to.equal(expected);
    });
  });
});
