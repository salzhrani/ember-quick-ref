import Ember from 'ember';
import data from '../data';
export default Ember.Route.extend({
  model : function(params) {
    return data[params.item_id];
  }
});
