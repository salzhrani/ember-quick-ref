import Ember from 'ember';
import data from '../data';
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

    return data.objectsAt(ids);
  }.property('term').readOnly(),
  actions: {
    updateTerm : function(term){
      this.set('term', term);
    }
  }
});
