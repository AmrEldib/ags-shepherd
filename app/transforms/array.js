import DS from 'ember-data';
import Ember from 'ember';

// source: http://stackoverflow.com/a/19557708/463

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return (Ember.typeOf(serialized) === "array") ? serialized : [];
  },

  serialize: function(deserialized) {
    var type = Ember.typeOf(deserialized);
    if (type === 'array') {
        return deserialized;
    } else if (type === 'string') {
        return deserialized.split(',').map(function(item) {
            return item.trim();
        });
    } else {
        return [];
    }
  }
});
