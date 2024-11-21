/**
 * Returns the first non-null defined value from the positional parameters, or
 * `undefined` if no non-null values were passed in.
 *
 * @param {array} positional - The positional parameters for this function
 *
 * @return {any} The first non-null defined element of `positional` or
 *               `undefined` if all the elements are null or undefined
 */
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: unknown[];
        Named: object;
    };
    Return: {} | undefined;
}>;
export default _default;
//# sourceMappingURL=coalesce.d.ts.map