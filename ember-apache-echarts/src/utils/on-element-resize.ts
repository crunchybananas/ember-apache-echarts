/**
 * Watches the `element` for resize events and calls the `callback` whenever
 * they occur.
 *
 * @param {HTMLElement} element  The element to watch
 * @param {Function}    callback The function to call when the element is
 *                               resized. Passed the `element`
 * @param {Boolean}     onceOnly When set to `true`, only calls the `callback`
 *                               the first time the element is resized;
 *                               otherwise it is called every time
 *
 * @return {ResizeObserver} The observer used to watch for resize events
 */
export default function onElementResize(element: HTMLElement, callback: ((element: HTMLElement) => void), onceOnly = false) {
  const resizeObserver = new ResizeObserver(() => {
    callback(element);

    if (onceOnly) {
      resizeObserver.disconnect();
    }
  });

  resizeObserver.observe(element);

  return resizeObserver;
}
