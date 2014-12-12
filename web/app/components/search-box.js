import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'search-box',
  term: null,
  termDidChange: function(){
    Ember.run.debounce(this,'updateTerm',200);
  }.observes('term'),
  'on-change': null,
  didInsertElement: function(){
    Ember.$(document).on('keyup.search','search-box', Ember.run.bind(this, 'docKeyUp'));
  },
  willDestroyElement: function(){
    Ember.$(document).off('keyup.search','search-box');
  },
  updateTerm: function(){
    this.sendAction('on-change', this.get('term'));
  },
  docKeyUp: function(e){
    // down
    if(e.keyCode === 40) {
      e.preventDefault();
      if (e.target.id === this.$('.search-box-input').attr('id')) {
        this.$('.search-box-results').find(':first > a').focus();
      } else {
        Ember.$(e.target).parent().next().children().focus();
      }
      return false;
    } else if (e.keyCode === 38) {
      // up 38
      e.preventDefault();
      if (Ember.$(e.target).parent().is(':first-child')) {
        this.$('.search-box-input').focus();
      } else {
        Ember.$(e.target).parent().prev().children().focus();
      }
      return false;
    }
  }
});
