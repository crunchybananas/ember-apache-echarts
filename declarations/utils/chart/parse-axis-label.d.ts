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
export default function parseAxisLabel(label: string): {
    type: string | undefined;
    label: string | undefined;
} | {
    label: string;
    type?: undefined;
};
//# sourceMappingURL=parse-axis-label.d.ts.map