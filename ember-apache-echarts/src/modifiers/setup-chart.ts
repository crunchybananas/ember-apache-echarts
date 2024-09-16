import { modifier } from 'ember-modifier';

export default modifier(function setupChart(element: HTMLElement, [setupAction]: [(element: HTMLElement) => void]) {
  setupAction(element);
});
