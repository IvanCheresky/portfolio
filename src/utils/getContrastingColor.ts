type ColorValueArray = [number, number, number];

const getContrastingColor = (color: ColorValueArray) => {
  const colorCopy = [...color];

  const modifiedColor = colorCopy.map((value) => {
    value /= 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });

  const l =
    0.2126 * modifiedColor[0] +
    0.7152 * modifiedColor[1] +
    0.0722 * modifiedColor[2]; // luminance

  return l > 0.179 ? "#000" : "#fff"; // https://www.w3.org/TR/WCAG20/
};

export default getContrastingColor;
