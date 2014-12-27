/* global hljs */

import Ember from 'ember';

export default Ember.Component.extend({
  item: null,
  highlight: function(){
    this.$('code[class]').each(function(){
      hljs.highlightBlock(this);
    });
  }.on('didInsertElement')
});
