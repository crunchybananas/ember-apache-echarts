/**
 * Wrapper function that catches any errors that occur in `func` and logs them
 * to `errorService`, which is set to default to `console.error`. Particularly
 * useful to wrap async functions where errors are being swallowed.
 *
 * @param {Function} func         The function to call
 * @param {Function} errorService A function to log the error. Passed
 *                                `(error, args)` where `args` are the original
 *                                arguments passed to `func`
 *
 * @return {Function} The wrapped function that catches any errors that occur in
 *                    `func`
 */
function catchErrors(func, errorService = (e) => console.error(e)) {
  return (...args) => {
    try {
      return func(...args);
    } catch (e) {
      return errorService(e, args);
    }
  };
}

export default catchErrors;
