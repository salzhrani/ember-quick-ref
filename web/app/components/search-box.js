import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'search-box',
  term: null,
  termDidChange: function(){
    Ember.run.debounce(this,'updateTerm',200);
  }.observes('term'),
  'on-change': null,
  updateTerm: function(){
    this.sendAction('on-change', this.get('term'));
  },
  keyUp: function(e){
    // down
    if(e.keyCode === 40) {
      if (e.target.id === this.$('.search-box-input').attr('id')) {
        this.$('.search-box-results').find(':first > a').focus();
      } else {
        Ember.$(e.target).parent().next().children().focus();
      }
    } else if (e.keyCode === 38) {
      // up 38
      if (Ember.$(e.target).parent().is(':first-child')) {
        this.$('.search-box-input').focus();
      } else {
        Ember.$(e.target).parent().prev().children().focus();
      }
    }
  }
});
