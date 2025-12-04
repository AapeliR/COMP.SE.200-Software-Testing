import { expect } from 'chai';
import difference from "../src/difference.js";

describe("difference()", () => {

  // Basic functionality

  it("should return elements not present in the other array", () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
  });

  it("should return an empty array if all elements are the same", () => {
    expect(difference([2, 1], [1, 2])).to.deep.equal([]);
  });

  it("should return a copy of the array if no values are provided", () => {
    const arr = [1, 2, 3];
    expect(difference(arr)).to.deep.equal([1, 2, 3]);
  });

  it("should preserve the order of the first array", () => {
    expect(difference([3, 2, 1], [2])).to.deep.equal([3, 1]);
  });

  it("should handle empty input array", () => {
    expect(difference([], [1, 2])).to.deep.equal([]);
  });

  it("should handle empty values array", () => {
    expect(difference([1, 2, 3], [])).to.deep.equal([1, 2, 3]);
  });

  // Multiple values or arrays

  it("should accept multiple arrays to exclude", () => {
    expect(difference([1, 2, 3, 4], [2], [3])).to.deep.equal([1, 4]);
  });

  it("should ignore non-array-like values in the values list", () => {
    expect(difference([1, 2, 3], [2], null, 5)).to.deep.equal([1, 3]);
  });

  // SameValueZero equality

  it("should treat NaN values as equal", () => {
    expect(difference([1, NaN, 2], [NaN])).to.deep.equal([1, 2]);
  });

  it("should treat 0 and -0 as equal", () => {
    expect(difference([0, -0, 1], [-0])).to.deep.equal([1]);
  });

  // Nested arrays and flattening

  it("should flatten values arrays before comparison", () => {
    expect(difference([1, 2, 3, 4], [[2, 3], 4])).to.deep.equal([1]);
  });

  it("should only flatten to one level", () => {
    expect(difference([1, 2, 3, 4], [[[2]], 3])).to.deep.equal([1,2,4]);
  });

  // Type checking

  it("should return empty array if the first argument is not array-like", () => {
    expect(difference(null, [1, 2])).to.deep.equal([]);
    expect(difference(42, [1, 2])).to.deep.equal([]);
    expect(difference({}, [1, 2])).to.deep.equal([]);
  });

});
