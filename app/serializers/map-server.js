import DS from 'ember-data';
import Service from './service';

export default Service.extend({
	normalizeResponse: function(store, primaryModelClass, payload, id, requestType)
	{
		let r = {
			data: {
				id: id,
				type: primaryModelClass.modelName,
				attributes: {
                    currentVersion: payload.currentVersion,
                    serviceDescription: payload.serviceDescription,
                    mapName: payload.mapName,
                    description: payload.description,
                    copyrightText: payload.copyrightText,
                    supportsDynamicLayers: payload.supportsDynamicLayers
                },
			}
		};

		return r;
	}
});
