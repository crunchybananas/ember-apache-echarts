function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

export default function deepMerge(target, source) {
  let output = Array.isArray(target) ? [...target] : { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
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
