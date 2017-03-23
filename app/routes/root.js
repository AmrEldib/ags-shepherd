import Ember from 'ember';

export default Ember.Route.extend({
	redirect: function() {
		// You need the `null` here (don't use `undefined`)
		// Ember will check the number of models you pass in
		this.transitionTo('root.folder', null);
	},
	model: function (params) {
		let url = params.protocol + "://" + params.host + "/" + params.instance + "/rest/services" + ( params.folder ? "/" + params.folder : "");
		return this.store.findRecord('root', url);
	}
});
