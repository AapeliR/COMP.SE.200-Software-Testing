import { expect } from 'chai';
import eq from "../src/eq.js";

describe("eq()", () => {

  // Identity and primitive equality

  it("should return true for identical strings", () => {
    expect(eq('a', 'a')).to.equal(true);
  });

  it("should return false for different strings with same characters", () => {
    expect(eq('a', Object('a'))).to.equal(false);
  });

  it("should return true for identical objects", () => {
    const object = { a: 1 };
    expect(eq(object, object)).to.equal(true);
  });

  it("should return false for different objects with same properties", () => {
    const object = { a: 1 };
    const other = { a: 1 };
    expect(eq(object, other)).to.equal(false);
  });

  // NaN handling

  it("should return true for identical NaN values", () => {
    expect(eq(NaN, NaN)).to.equal(true);
  });

  it("should return false for NaN and a different value", () => {
    expect(eq(NaN, 42)).to.equal(false);
  });

  // Zero handling

  it("should return true for positive zero and negative zero", () => {
    expect(eq(0, -0)).to.equal(true);
  });

  it("should return false for positive zero and a non-zero value", () => {
    expect(eq(0, 42)).to.equal(false);
  });

  it("should return false for negative zero and a non-zero value", () => {
    expect(eq(-0, 42)).to.equal(false);
  });

  // Object differences

  it("should return false for objects with different properties", () => {
    const object1 = { a: 1 };
    const object2 = { b: 2 };
    expect(eq(object1, object2)).to.equal(false);
  });

  // Type mismatch

  it("should return false for different types", () => {
    expect(eq('42', 42)).to.equal(false);
  });

});
