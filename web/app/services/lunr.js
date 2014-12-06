import Ember from 'ember';
import data from '../data';
export default Ember.Object.extend({
  init: function(){
    // build index
    this.index = lunr(function () {
      this.field('name', {boost:10});
      this.field('short', {boost:10});
      // this.field('module');
      // this.field('submodule');
      this.field('class');
      // this.field('namespace');
    });
    for (var i = 0; i < data.length; i++) {
        this.index.add(data[i]);
    }
  },
  search : function(term) {
    return this.index.search(term);
  }
});
