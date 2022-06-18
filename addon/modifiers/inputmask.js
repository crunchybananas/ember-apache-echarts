import { modifier } from 'ember-modifier';
import Inputmask from 'inputmask';

export default modifier(function inputmask(element, params, hash) {
  new Inputmask(hash).mask(element);
});
