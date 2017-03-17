import DS from 'ember-data';

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
