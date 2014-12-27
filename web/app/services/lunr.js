/* global lunr */
import Ember from 'ember';
import data from '../data';
import classes from '../classes';
export default Ember.Object.extend({
  init: function(){
    // build index
    this.index = lunr(function () {
      this.field('name', {boost:10});
      this.field('shortname', {boost:10});
      // this.field('description');
      this.field('module');
      // this.field('submodule');
      this.field('class');
      // this.field('namespace');
    });
    for (var i = 0; i < data.length; i++) {
        this.index.add(data[i]);
    }
    for (var name in classes) {
      classes[name].id = name;
      this.index.add(classes[name]);
    }
  },
  search : function(term) {
    return this.index.search(term);
  }
});
