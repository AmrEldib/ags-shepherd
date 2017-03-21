import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        let root = this.modelFor('root');
		let url = root.id + "/" + params.serviceName + "/FeatureServer";
		return this.store.findRecord('feature-server', url);
	}
});
