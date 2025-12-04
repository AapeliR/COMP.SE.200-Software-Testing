import { expect } from 'chai';
import ceil from "../src/ceil.js";

describe("ceil()", () => {

  // Basic rounding

  it("should round 4.006 up to 5", () => {
    expect(ceil(4.006)).to.equal(5);
  });

  it("should round 4.1 up to 5", () => {
    expect(ceil(4.1)).to.equal(5);
  });

  it("should return the same integer if already whole", () => {
    expect(ceil(5)).to.equal(5);
  });

  it("should round negative numbers upward", () => {
    expect(ceil(-4.1)).to.equal(-4);
  });

  it("should return the same negative integer if already whole", () => {
    expect(ceil(-5)).to.equal(-5);
  });

  // Decimal precision handling

  it("should round 6.004 with precision 2 to 6.01", () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });

  it("should round 4.0001 with precision 3 to 4.001", () => {
    expect(ceil(4.0001, 3)).to.equal(4.001);
  });

  it("should round 1.2345 with precision 2 to 1.24", () => {
    expect(ceil(1.2345, 2)).to.equal(1.24);
  });

  // Precision handling 

  it("should round 6040 with precision -2 up to 6100", () => {
    expect(ceil(6040, -2)).to.equal(6100);
  });

  it("should round 1250 with precision -1 to 1250", () => {
    expect(ceil(1250, -1)).to.equal(1250);
  });

  it("should round -1250 with precision -2 toward +infinity (to -1200)", () => {
    expect(ceil(-1250, -2)).to.equal(-1200);
  });

  // Type handling

  it("should coerce string numbers", () => {
    expect(ceil("4.2")).to.equal(5);
  });

  it("should return NaN for non-numeric strings", () => {
    expect(ceil("abc")).to.be.NaN;
  });

  it("should treat null as 0", () => {
    expect(ceil(null)).to.equal(0);
  });

  it("should treat undefined as NaN", () => {
    expect(ceil(undefined)).to.be.NaN;
  });

  it("should treat true as 1", () => {
    expect(ceil(true)).to.equal(1);
  });

  it("should treat false as 0", () => {
    expect(ceil(false)).to.equal(0);
  });

  // Object and array handling

  it("should coerce empty array to 0", () => {
    expect(ceil([])).to.equal(0);
  });

  it("should coerce single-value array [4.1] to ceil(4.1) → 5", () => {
    expect(ceil([4.1])).to.equal(5);
  });

  it("should return NaN for multi-value arrays", () => {
    expect(ceil([1, 2])).to.be.NaN;
  });

  it("should return NaN for plain objects", () => {
    expect(ceil({})).to.be.NaN;
  });

  it("should return NaN for objects with valueOf returning non-number", () => {
    expect(ceil({ valueOf: () => "abc" })).to.be.NaN;
  });

  // Edge cases

  it("should return NaN when rounding NaN", () => {
    expect(ceil(NaN)).to.be.NaN;
  });

  it("should return Infinity when rounding Infinity", () => {
    expect(ceil(Infinity)).to.equal(Infinity);
  });

  it("should return -Infinity when rounding -Infinity", () => {
    expect(ceil(-Infinity)).to.equal(-Infinity);
  });

  it("should handle zero correctly", () => {
    expect(ceil(0)).to.equal(0);
  });

  it("should handle -0 correctly (should return -0)", () => {
    const result = ceil(-0);
    expect(1 / result).to.equal(-Infinity); // check sign of zero
  });

});
