function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
//@ts-expect-error: The purpose of this file is to merge anything. Not sure what types would be.
function deepMerge(target, source) {
  const output = Array.isArray(target) ? [...target] : {
    ...target
  };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          output[key] = source[key];
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else if (Array.isArray(source[key])) {
        output[key] = source[key].slice();
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

export { deepMerge as default };
//# sourceMappingURL=deep-merge.js.map
