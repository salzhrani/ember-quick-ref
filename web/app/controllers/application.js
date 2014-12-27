import Ember from 'ember';
import data from '../data';
import classes from '../classes';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
export default Ember.ObjectController.extend({
  term: null,
  items : function(){
    if (!this.get('term')) {
      return [];
    }
    var items = this.lunrService.search(this.get('term'));
    var ids = new Array(items.length > 15 ? 15 : items.length);
    for (var i = ids.length - 1; i >= 0; i--) {
      ids[i] = items[i].ref;
    }

    return ids.map(function (id) {
      if (isNumber(id)) {
        return data[id];
      } else {
        return classes[id];
      }
    });
  }.property('term').readOnly(),
  actions: {
    updateTerm : function(term){
      this.set('term', term);
    }
  }
});
