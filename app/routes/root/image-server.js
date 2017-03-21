import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        let root = this.modelFor('root');
		let url = root.id + "/" + params.serviceName + "/ImageServer";
		return this.store.findRecord('image-server', url);
	}
});
