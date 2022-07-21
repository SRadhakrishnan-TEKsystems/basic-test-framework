const { test, expect } = require("./test.framework");
const { sum } = require("./math");

test("add test", () => {
  expect(sum(2, 3)).toBe(4);
});
