import { expect } from 'chai';
import capitalize from "../src/capitalize.js";

describe("capitalize", () => {

  it("should convert first character of string into capitalized", () => {
    expect(capitalize("tampere")).to.equal("Tampere");
  });

  it("should lowercase remaining uppercase characters after first", () => {
    expect(capitalize("TAMPERE")).to.equal("Tampere");
  });

  it("should handle strings with mixed uppercase and lowercase", () => {
    expect(capitalize("taMpeRe")).to.equal("Tampere");
  });

  it("should handle single character string", () => {
    expect(capitalize("a")).to.equal("A");
  });

  it("should handle numbers in a string", () => {
    expect(capitalize("123Abc")).to.equal("123abc");
  });

  it("should return an empty string when given an empty string", () => {
    expect(capitalize("")).to.equal("");
  });

});
