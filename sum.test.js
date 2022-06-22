const sum = require("./sum");
test("add three numbers", () => {
  expect(sum(1, 2, 3)).toBe(6);
});
