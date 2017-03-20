import DS from 'ember-data';
import Service from './service';

export default Service.extend({
	normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {
		let r = {
			data: {
				id: id,
				type: primaryModelClass.modelName,
				attributes: {
					currentVersion: payload.currentVersion,
					serviceDescription: payload.serviceDescription,
					hasVersionedData: payload.hasVersionedData,
					supportsDisconnectedEditing: payload.supportsDisconnectedEditing,
					hasStaticData: payload.hasStaticData,
					maxRecordCount: payload.maxRecordCount,
					supportedQueryFormats: payload.supportedQueryFormats,
					capabilities: payload.capabilities,
					description: payload.description,
					copyrightText: payload.copyrightText,
					spatialReference: payload.spatialReference, // spatialReference
					initialExtent: payload.initialExtent, // envelope
					fullExtent: payload.fullExtent, // envelope
					allowGeometryUpdates: payload.allowGeometryUpdates,
					units: payload.units,
					syncEnabled: payload.syncEnabled,
					supportsASync: (payload.syncCapabilities) ? payload.syncCapabilities.supportsASync : undefined,
					supportsRegisteringExistingData: (payload.syncCapabilities) ? payload.syncCapabilities.supportsRegisteringExistingData : undefined,
					supportsSyncDirectionControl: (payload.syncCapabilities) ? payload.syncCapabilities.supportsSyncDirectionControl : undefined,
					supportsPerLayerSync: (payload.syncCapabilities) ? payload.syncCapabilities.supportsPerLayerSync : undefined,
					supportsPerReplicaSync: (payload.syncCapabilities) ? payload.syncCapabilities.supportsPerReplicaSync : undefined,
					supportsRollbackOnFailure: (payload.syncCapabilities) ? payload.supportsRollbackOnFailure : undefined,
					enableEditorTracking: payload.enableEditorTracking,
					enableOwnershipAccessControl: payload.enableOwnershipAccessControl,
					allowOthersToUpdate: payload.allowOthersToUpdate,
					allowOthersToDelete: payload.allowOthersToDelete,
					documentInfoTitle: (payload.documentInfo) ? payload.documentInfo.title : undefined,
					documentInfoAuthor: (payload.documentInfo) ? payload.documentInfo.author : undefined,
					documentInfoComments: (payload.documentInfo) ? payload.documentInfo.comments : undefined,
					documentInfoSubject: (payload.documentInfo) ? payload.documentInfo.subject : undefined,
					documentInfoCategory: (payload.documentInfo) ? payload.documentInfo.category : undefined,
					documentInfoKeywords: (payload.documentInfo) ? payload.documentInfo.keywords : undefined,
					enableZDefaults: payload.enableZDefaults,
					zDefault: payload.zDefault
				},
				relationships: {
					layers: {
						data: []
					},
					tables: {
						data: []
					}
				}
			}
		};

		payload.layers.forEach(function (layer) {
			r.data.relationships.layers.data.push({
				type: "feature-layer",
				id: id + "/" + layer.id
			});
		});
		payload.tables.forEach(function (table) {
			r.data.relationships.tables.data.push({
				type: "feature-layer",
				id: id + "/" + table.id
			});
		});

		return r;
	}
});
