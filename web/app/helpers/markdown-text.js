/* global marked */
import Ember from 'ember';

export function markdownText(input) {

  return marked(input || '');
}

export default Ember.Handlebars.makeBoundHelper(markdownText);
