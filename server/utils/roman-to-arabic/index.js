const isRomanNumeral = require("../../utils/is-roman-numeral");

function romanToArabic(roman) {
  let numeral = String(roman)
    .replace(/\s+/g, "")
    .trim();

  if (!isRomanNumeral(numeral)) {
    throw new Error("Numeral not well-formatted");
  }

  const SYMBOLS = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };

  const arabic = Object.entries(SYMBOLS)
    .reverse()
    .reduce((acc, cur) => {
      while (numeral.indexOf(cur[1]) === 0) {
        numeral = numeral.replace(cur[1], "");
        acc += parseInt(cur[0], 10);
      }
      return acc;
    }, 0);

  return arabic;
}

module.exports = romanToArabic;
