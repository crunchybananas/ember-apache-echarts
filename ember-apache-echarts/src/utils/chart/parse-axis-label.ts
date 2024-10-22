/**
 * Parses an axis label into the label itself and its type.
 *
 * Specifically labels on the time axis may be formatted as `{primary|<label>}`
 * to indicate they are a primary label and should be formatted using the
 * primary formatting.
 *
 * @param {string} label A label as formatted by an axis or scale
 *
 * @return {object} An object containing the `label` and an optional `type`
 */
export default function parseAxisLabel(label: string) {
  if (label.startsWith('{') && label.endsWith('}') && label.includes('|')) {
    const [type, text] = label.substring(1, label.length - 2).split('|');

    return {
      type,
      label: text,
    };
  }

  return {
    label,
  };
}
