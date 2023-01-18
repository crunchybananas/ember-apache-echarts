const fontHeightText = 'ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz';

/**
 * Returns the width and height of the `text` when rendered with the `style`.
 *
 * @param {string} text  A string to render as text
 * @param {object} style An object containing CSS properties
 *
 * @return {object} An object specifying the `width` and `height` of the
 *                  rendered text in pixels
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
  // target browsers, then this should be updated.
  const metrics = ctx.measureText(text);

  let fontHeight;

  if (metrics.fontBoundingBoxAscent != null) {
    fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
  } else {
    const { actualBoundingBoxAscent, actualBoundingBoxDescent } =
      ctx.measureText(fontHeightText);

    // 1.1 was found through trial and error to give a reasonable approximation
    // in Firefox, which is the only browser that should be executing this code
    fontHeight = (actualBoundingBoxAscent + actualBoundingBoxDescent) * 1.1;
  }

  return {
    height: metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent,
    width: metrics.width,
    fontHeight,
  };
}

export default computeTextMetrics;
