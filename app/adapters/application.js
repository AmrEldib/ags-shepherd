import DS from 'ember-data';

export default DS.Adapter.extend({
	findRecord: function (store, type, id, snapshot) {
		return new Ember.RSVP.Promise(function (resolve, reject) {
			Ember.$.getJSON(id + '?f=json').then(function (data) {
				resolve(data);
			}, function (jqXHR) {
				reject(jqXHR);
			});
		});
	}
});
