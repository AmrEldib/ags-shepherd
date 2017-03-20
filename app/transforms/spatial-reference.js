import DS from 'ember-data';
import Ember from 'ember';

export default DS.Transform.extend({
  deserialize(serialized) {
    return Ember.Object.create({ wkid: serialized.wkid, y: serialized.latestWkid });
  },

  serialize(deserialized) {
    return {
		wkid: deserialized.wkid,
		latestWkid: deserialized.latestWkid
	};
  }
});
