import { expect } from 'chai';
import add from "../src/add.js";

describe("add()", () => {
  it("adds numbers", () => {
    expect(add(1, 2)).to.equal(3);
  });
});