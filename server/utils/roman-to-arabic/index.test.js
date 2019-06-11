const test = require("ava");

const romanToArabic = require("./index");

test("should throw an error if the numeral is not well-formatted", t => {
  const expected = "Numeral not well-formatted";
  const actual = () => romanToArabic("BLABLA");

  t.throws(actual, expected);
});

test("should return the Arabic version of a Roman numeral", t => {
  const expected = 2019;
  const actual = romanToArabic("MMXIX");

  t.is(actual, expected);
});
