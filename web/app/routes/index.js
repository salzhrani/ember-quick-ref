import Ember from 'ember';
import klasses from '../classes';
var classes = Ember.keys(klasses);
export default Ember.Route.extend({
  model: function() {
    return classes;
  }
});
