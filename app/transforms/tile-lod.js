import DS from 'ember-data';
import Ember from 'ember';

export default DS.Transform.extend({
	deserialize(serialized) {
		var r = [];
		serialized.forEach(function (lod) {
			r.push(Ember.Object.create({
				level: lod.level,
				resolution: lod.resolution,
				scale: lod.scale
			}));
		});
		return r;
	},

	serialize(deserialized) {
		return {
			level: deserialized.level,
			resolution: deserialized.resolution,
			scale: deserialized.scale
		};
	}
});
