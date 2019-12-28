const re = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

const isRomanNumeral = string => re.test(String(string));

module.exports = isRomanNumeral;