const Intcode = require("./day2");
const MODIFIED_PUZZLE_INPUT = require("./modifiedPuzzleInput");

describe("Day ", () => {
  test("1, 0, 0, 0, 99", () => {
    expect(Intcode([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
  });
  test("2,3,0,3,99 ", () => {
    expect(Intcode([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
  });
  test("2,4,4,5,99,0", () => {
    expect(Intcode([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
  });
  test("Solve the Puzzle part 1", () => {
    expect(Intcode(MODIFIED_PUZZLE_INPUT)).toEqual([
      2842648,
      12,
      2,
      2,
      1,
      1,
      2,
      3,
      1,
      3,
      4,
      3,
      1,
      5,
      0,
      3,
      2,
      10,
      1,
      48,
      1,
      19,
      6,
      50,
      2,
      13,
      23,
      250,
      1,
      27,
      13,
      255,
      1,
      9,
      31,
      258,
      1,
      35,
      9,
      261,
      1,
      39,
      5,
      262,
      2,
      6,
      43,
      524,
      1,
      47,
      6,
      526,
      2,
      51,
      9,
      1578,
      2,
      55,
      13,
      7890,
      1,
      59,
      6,
      7892,
      1,
      10,
      63,
      7896,
      2,
      67,
      9,
      23688,
      2,
      6,
      71,
      47376,
      1,
      75,
      5,
      47377,
      2,
      79,
      10,
      189508,
      1,
      5,
      83,
      189509,
      2,
      9,
      87,
      568527,
      1,
      5,
      91,
      568528,
      2,
      13,
      95,
      2842640,
      1,
      99,
      10,
      2842644,
      1,
      103,
      2,
      2842646,
      1,
      107,
      6,
      0,
      99,
      2,
      14,
      0,
      0
    ]);
  });
});
