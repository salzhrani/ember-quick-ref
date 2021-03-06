import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('show', { path: ':item_id' });
  this.route('c', { path: '/c/:class_name' });
});

export default Router;
