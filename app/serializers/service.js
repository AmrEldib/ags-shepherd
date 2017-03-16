import DS from 'ember-data';

export default DS.Serializer.extend({
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType)
	{
		let r = {
			data: {
				id: id,
				type: primaryModelClass.modelName,
				attributes: {
                    currentVersion: payload.currentVersion,
                    serviceDescription: payload.serviceDescription
                },
			}
		};

		return r;
	}
});
