function arabicToRoman(arabic) {
  if (isNaN(arabic)) {
    throw new Error("Not a number.");
  }
  if (!Number.isInteger(arabic)) {
    throw new Error("Not an integer.");
  }
  if (arabic < 0 || arabic > 3999) {
    throw new Error("Cannot convert numbers below 0 or above 3999.");
  }
  if (arabic === 0) {
    return "";
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

  let number = arabic;

  const roman = Object.entries(SYMBOLS)
    .reverse()
    .reduce((acc, cur) => {
      while (number >= parseInt(cur[0], 10)) {
        number -= parseInt(cur[0], 10);
        acc += cur[1];
      }
      return acc;
    }, "");

  return roman;
}

export default arabicToRoman;
