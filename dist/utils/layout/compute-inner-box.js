/**
 * Computes the position and dimensions of the inner box given an outer box and
 * a style that includes the margin, padding and border.
 *
 * @param {object} outerBox Specifies the `width`, `height`, `x` & `y` of the
 *                          outer box
 * @param {object} style    A resolved style object
 *
 * @return {object} The `width`, `height`, `x` and `y` of the inner box
 */
// @ts-expect-error: not sure
const computeInnerBox = (outerBox, style) => ({
  ...outerBox,
  width: outerBox.width - style.marginLeft - style.marginRight - style.borderLeftWidth - style.borderRightWidth - style.paddingLeft - style.paddingRight,
  height: outerBox.height - style.marginTop - style.marginBottom - style.borderTopWidth - style.borderBottomWidth - style.paddingTop - style.paddingBottom,
  x: outerBox.x + style.marginLeft + style.borderLeftWidth + style.paddingLeft,
  y: outerBox.y + style.marginTop + style.borderTopWidth + style.paddingTop
});

export { computeInnerBox as default };
//# sourceMappingURL=compute-inner-box.js.map
