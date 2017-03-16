import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		let url = params.protocol + "://" + params.host + "/" + params.instance + "/rest/services/";
		return this.get('store').findRecord('root', url);
	}
});
