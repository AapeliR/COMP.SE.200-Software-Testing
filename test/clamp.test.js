import { expect } from "chai";
import clamp from "../src/clamp.js";

// FIRST ITERATION:
/*
// clamp.test.js

// NOTE: This test file was generated with the assistance of AI
//       and is based on the Test Case Design Table provided in the document "Test Plan".
// Purpose: Test the clamp() function with a wide variety of inputs, including edge cases,
//          coercible values, and exceptional inputs. Tests are independent so all tests
//          run even if some fail. The suite reflects the documented test plan inputs
//          and expected results.

describe("clamp()", () => {

  // -------------------------------
  // Basic numeric clamping
  // -------------------------------
  it("should return 0 when clamping (0, -1, 1)", () => {
    expect(clamp(0, -1, 1)).to.equal(0);
  });

  it("should return 1 when clamping (2, -1, 1)", () => {
    expect(clamp(2, -1, 1)).to.equal(1);
  });

  it("should return -1 when clamping (-2, -1, 1)", () => {
    expect(clamp(-2, -1, 1)).to.equal(-1);
  });

  it("should return 1 when clamping (1, 1, 1)", () => {
    expect(clamp(1, 1, 1)).to.equal(1);
  });

  // -------------------------------
  // Default parameters
  // -------------------------------
  it("should return 0 when clamping (0) with missing bounds", () => {
    expect(clamp(0)).to.equal(0);
  });

  it("should return -1 when clamping (-1, -2) with missing upper", () => {
    expect(clamp(-1, -2)).to.equal(-1);
  });

  it("should return 0 when clamping (1, -1) with missing upper", () => {
    expect(clamp(1, -1)).to.equal(0);
  });

  // -------------------------------
  // Floating point values
  // -------------------------------
  it("should return 1.1 when clamping (1.1, 1.05, 1.15)", () => {
    expect(clamp(1.1, 1.05, 1.15)).to.equal(1.1);
  });

  // -------------------------------
  // Swapped bounds (exceptions)
  // -------------------------------
  it("should return -1 when clamping (0, 1, -1) with reversed bounds", () => {
    expect(clamp(0, 1, -1)).to.equal(-1);
  });

  it("should return -1 when clamping (2, 1, -1)", () => {
    expect(clamp(2, 1, -1)).to.equal(-1);
  });

  it("should return -1 when clamping (-2, 1, -1)", () => {
    expect(clamp(-2, 1, -1)).to.equal(-1);
  });

  // -------------------------------
  // Extreme numeric values
  // -------------------------------
  it("should return Number.MAX_SAFE_INTEGER when clamping (Number.MAX_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER)", () => {
    expect(clamp(Number.MAX_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER)).to.equal(Number.MAX_SAFE_INTEGER);
  });

  it("should return -Number.EPSILON when clamping (-1, -Number.EPSILON, 0)", () => {
    expect(clamp(-1, -Number.EPSILON, 0)).to.equal(-Number.EPSILON);
  });

  // -------------------------------
  // Non-numeric values and coercion
  // -------------------------------
  it("should return 0 when clamping undefined", () => {
    expect(clamp(undefined)).to.equal(0);
  });

  it("should return 0 when clamping null", () => {
    expect(clamp(null)).to.equal(0);
  });

  it("should return 0 when clamping ('0', '-1', '2')", () => {
    expect(clamp("0", "-1", "2")).to.equal(0);
  });

  it("should return 1 when clamping (1, [], 2)", () => {
    expect(clamp(1, [], 2)).to.equal(1);
  });

  it("should return 1 when clamping ([1], [0], [3])", () => {
    expect(clamp([1], [0], [3])).to.equal(1);
  });

  // -------------------------------
  // Exceptional / NaN cases
  // -------------------------------
  it("should return NaN when clamping NaN", () => {
    expect(clamp(NaN)).to.be.NaN;
  });

  it("should return NaN when clamping ('a', 'b', 'c')", () => {
    expect(clamp("a", "b", "c")).to.be.NaN;
  });

  it("should return NaN when clamping (1, {}, 2)", () => {
    expect(clamp(1, {}, 2)).to.be.NaN;
  });

}); */


// NEW AI-ADDED TEST CASES:
// clamp.test.js

// NOTE: This test file was generated with the assistance of AI
//       Original tests were based on the Test Case Design Table in "Test Plan".
//       Additional tests (marked with "AI-added") cover more edge cases, coercions, and exceptions
//       to ensure robust testing of the clamp() function.

describe("clamp()", () => {

  // -------------------------------
  // Basic numeric clamping
  // -------------------------------
  it("should return 0 when clamping (0, -1, 1)", () => {
    expect(clamp(0, -1, 1)).to.equal(0);
  });

  it("should return 1 when clamping (2, -1, 1)", () => {
    expect(clamp(2, -1, 1)).to.equal(1);
  });

  it("should return -1 when clamping (-2, -1, 1)", () => {
    expect(clamp(-2, -1, 1)).to.equal(-1);
  });

  it("should return 1 when clamping (1, 1, 1)", () => {
    expect(clamp(1, 1, 1)).to.equal(1);
  });

  // -------------------------------
  // Default parameters
  // -------------------------------
  it("should return 0 when clamping (0) with missing bounds", () => {
    expect(clamp(0)).to.equal(0);
  });

  it("should return -1 when clamping (-1, -2) with missing upper", () => {
    expect(clamp(-1, -2)).to.equal(-1);
  });

  it("should return 0 when clamping (1, -1) with missing upper", () => {
    expect(clamp(1, -1)).to.equal(0);
  });

  // -------------------------------
  // Floating point values
  // -------------------------------
  it("should return 1.1 when clamping (1.1, 1.05, 1.15)", () => {
    expect(clamp(1.1, 1.05, 1.15)).to.equal(1.1);
  });

  // -------------------------------
  // Swapped bounds (exceptions)
  // -------------------------------
  it("should return -1 when clamping (0, 1, -1) with reversed bounds", () => {
    expect(clamp(0, 1, -1)).to.equal(-1);
  });

  it("should return -1 when clamping (2, 1, -1)", () => {
    expect(clamp(2, 1, -1)).to.equal(-1);
  });

  it("should return -1 when clamping (-2, 1, -1)", () => {
    expect(clamp(-2, 1, -1)).to.equal(-1);
  });

  // -------------------------------
  // Extreme numeric values
  // -------------------------------
  it("should return Number.MAX_SAFE_INTEGER when clamping (Number.MAX_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER)", () => {
    expect(clamp(Number.MAX_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER)).to.equal(Number.MAX_SAFE_INTEGER);
  });

  it("should return -Number.EPSILON when clamping (-1, -Number.EPSILON, 0)", () => {
    expect(clamp(-1, -Number.EPSILON, 0)).to.equal(-Number.EPSILON);
  });

  // -------------------------------
  // Non-numeric values and coercion
  // -------------------------------
  it("should return 0 when clamping undefined", () => {
    expect(clamp(undefined)).to.equal(0);
  });

  it("should return 0 when clamping null", () => {
    expect(clamp(null)).to.equal(0);
  });

  it("should return 0 when clamping ('0', '-1', '2')", () => {
    expect(clamp("0", "-1", "2")).to.equal(0);
  });

  it("should return 1 when clamping (1, [], 2)", () => {
    expect(clamp(1, [], 2)).to.equal(1);
  });

  it("should return 1 when clamping ([1], [0], [3])", () => {
    expect(clamp([1], [0], [3])).to.equal(1);
  });

  // -------------------------------
  // Exceptional / NaN cases
  // -------------------------------
  it("should return NaN when clamping NaN", () => {
    expect(clamp(NaN)).to.be.NaN;
  });

  it("should return NaN when clamping ('a', 'b', 'c')", () => {
    expect(clamp("a", "b", "c")).to.be.NaN;
  });

  it("should return NaN when clamping (1, {}, 2)", () => {
    expect(clamp(1, {}, 2)).to.be.NaN;
  });

  // -------------------------------
  // AI-added tests
  // -------------------------------
  // Reasoning: Test all coercible and unusual types to see how function handles them
  it("should return 5 when clamping (5, 0, 10) [AI-added]", () => {
    expect(clamp(5, 0, 10)).to.equal(5);
  });

  it("should return 0 when clamping (-10, 0, 10) [AI-added]", () => {
    expect(clamp(-10, 0, 10)).to.equal(0);
  });

  it("should return 10 when clamping (20, 0, 10) [AI-added]", () => {
    expect(clamp(20, 0, 10)).to.equal(10);
  });

  it("should return 0 when clamping (false, -1, 1) [AI-added]", () => {
    // Reasoning: false coerces to 0
    expect(clamp(false, -1, 1)).to.equal(0);
  });

  it("should return 1 when clamping (true, 0, 2) [AI-added]", () => {
    // Reasoning: true coerces to 1
    expect(clamp(true, 0, 2)).to.equal(1);
  });

  it("should return 0 when clamping ('abc', 0, 10) [AI-added]", () => {
    // Reasoning: 'abc' converts to NaN; check how function handles invalid numeric strings
    expect(clamp('abc', 0, 10)).to.be.NaN;
  });

  it("should return 3 when clamping ([3], 0, 5) [AI-added]", () => {
    // Reasoning: array with single numeric element coerces to number
    expect(clamp([3], 0, 5)).to.equal(3);
  });

  it("should return NaN when clamping ([1,2], 0, 5) [AI-added]", () => {
    // Reasoning: array with multiple elements cannot be coerced; expect NaN
    expect(clamp([1,2], 0, 5)).to.be.NaN;
  });

  it("should return NaN when clamping ({value:5}, 0, 10) [AI-added]", () => {
    // Reasoning: objects cannot be coerced to numbers
    expect(clamp({value:5}, 0, 10)).to.be.NaN;
  });

  it("should return 0 when clamping (null, null, null) [AI-added]", () => {
    // Reasoning: all nulls default to 0
    expect(clamp(null, null, null)).to.equal(0);
  });

});
