import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        let root = this.modelFor('root');
		let url = root.id + "/" + params.serviceName + "/MapServer";
		return this.store.findRecord('map-server', url);
	}
});
