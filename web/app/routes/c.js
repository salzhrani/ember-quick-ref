import Ember from 'ember';
import klasses from '../classes';
export default Ember.Route.extend({
  model : function (params) {
    return klasses[params.class_name];
  }
});
