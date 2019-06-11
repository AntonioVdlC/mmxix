const isRomanNumeral = require("../../utils/is-roman-numeral");
const romanToArabic = require("../../utils/roman-to-arabic");

module.exports = (req, res) => {
  if (!req.query.roman) {
    res.status(400);
    res.send({
      error: "Bad request",
      reason: "Missing 'roman' query parameter"
    });
    return;
  }

  const numeral = req.query.roman.replace(/\s+/g, "").trim();
  if (!isRomanNumeral(numeral)) {
    res.status(400);
    res.send({
      error: "Bad request",
      reason: `'${numeral}' is not a well formatted Roman numeral.`
    });
    return;
  }

  let arabic;
  try {
    arabic = romanToArabic(numeral);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send({
      error: "Internal Server Error",
      reason: `Oops, seems like we are facing some issues with converting '${numeral}' to Arabic numbers ...`
    });
    return;
  }

  res.send(String(arabic));
};
