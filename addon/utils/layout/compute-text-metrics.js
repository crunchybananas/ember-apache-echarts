/**
 * Converts an object into a CSS style string.
 *
 * @param {object} style An object containing CSS properties
 *
 * @return {string} A string representation of the CSS properties suitable for a
 *                  `style` attribute
 */
function computeTextMetrics(text, style) {
  const canvas = document.createElement('canvas');

  // These need to be big enough to render `stringToMeasure`
  canvas.setAttribute('height', 1000);
  canvas.setAttribute('width', 400);

  const ctx = canvas.getContext('2d');

  ctx.font = `${style.fontWeight ?? 'normal'} ${style.fontSize}px ${
    style.fontFamily
  }`;

  // Have to use a actual bounding box instead of font bounding box, since font
  // bounding box required turning on a flag in Firefox. Once
  // fontBoundingBoxAscent and fontBoundingBoxDescent are implemented on all our
  // target borwsers, then this should be updated.
  const metrics = ctx.measureText(text);

  return {
    height: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent,
    width: metrics.width,
  };
}

export default computeTextMetrics;
