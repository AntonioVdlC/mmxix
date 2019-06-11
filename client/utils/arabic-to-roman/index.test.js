import arabicToRoman from "./index";

describe("arabicToRoman", () => {
  it("throws an error if not passed a number", () => {
    const expected = new Error("Not a number.");
    const actual = () => arabicToRoman("some random value");

    expect(actual).toThrow(expected);
  });

  it("throws an error if not passed an integer", () => {
    const expected = new Error("Not an integer.");
    const actual = () => arabicToRoman(123.456);

    expect(actual).toThrow(expected);
  });

  it("throws an error if not passed an integer between 0 and 3999", () => {
    const expected = new Error("Cannot convert numbers below 0 or above 3999.");
    const actual = () => arabicToRoman(123456);

    expect(actual).toThrow(expected);
  });

  it("returns an empty string for '0'", () => {
    const expected = "";
    const actual = arabicToRoman(0);

    expect(actual).toEqual(expected);
  });

  it("should convert properly", () => {
    const expected = "MMXIX";
    const actual = arabicToRoman(2019);

    expect(actual).toEqual(expected);
  });
});
