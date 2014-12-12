import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['ref-app'],
  didInsertElement : function(){
    this.$('.search-box-input').focus();
  }
});
