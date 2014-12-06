import Ember from 'ember';
import data from 'web/data';

export default Ember.Object.extend({
  find: function(name){
    return data;
  }
});
