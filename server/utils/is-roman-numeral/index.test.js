const test = require("ava");

const isRomanNumeral = require("../../utils/is-roman-numeral");

test("should return false if not a Roman numeral", t => {
  const expected = false;
  const actual = isRomanNumeral();

  t.is(actual, expected);
});

test("should return true if a Roman numeral", t => {
  const expected = true;
  const actual = isRomanNumeral("MMXIX");

  t.is(actual, expected);
});
