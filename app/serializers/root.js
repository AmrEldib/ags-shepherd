import DS from 'ember-data';
import AgsFolder from './agsfolder';

export default AgsFolder.extend({
	/*
	normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {
		//let r = this.super.normalizeResponse(...parameters);
		let r = this._super(...arguments);
		r.data.type = primaryModelClass.modelName;
		return r;
	}
	*/
	normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {
		let r = {
			data: {
				id: id,
				type: primaryModelClass.modelName,
				attributes: payload,
				relationships: {
					folders: {
						data: []
					},
					services: {
						data: []
					}
				}
			}
		};

		payload.folders.forEach(function (folderName) {
			r.data.relationships.folders.data.push({
				type: "folder",
				id: id + "/" + folderName
			});
		});
		payload.services.forEach(function (service) {
			r.data.relationships.services.data.push({
				type: service.type,
				id: id + "/" + service.name.substring(service.name.indexOf("/") + 1) + "/" + service.type
			});
		});

		delete r.data.attributes.folders;
		delete r.data.attributes.services;

		return r;
	}
});
