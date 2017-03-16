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
					supportsASync: payload.syncCapabilities.supportsASync,
					supportsRegisteringExistingData: payload.syncCapabilities.supportsRegisteringExistingData,
					supportsSyncDirectionControl: payload.syncCapabilities.supportsSyncDirectionControl,
					supportsPerLayerSync: payload.syncCapabilities.supportsPerLayerSync,
					supportsPerReplicaSync: payload.syncCapabilities.supportsPerReplicaSync,
					supportsRollbackOnFailure: payload.supportsRollbackOnFailure,
					enableEditorTracking: payload.enableEditorTracking,
					enableOwnershipAccessControl: payload.enableOwnershipAccessControl,
					allowOthersToUpdate: payload.allowOthersToUpdate,
					allowOthersToDelete: payload.allowOthersToDelete,
					documentInfoTitle: payload.documentInfoTitle,
					documentInfoAuthor: payload.documentInfoAuthor,
					documentInfoComments: payload.documentInfoComments,
					documentInfoSubject: payload.documentInfoSubject,
					documentInfoCategory: payload.documentInfoCategory,
					documentInfoKeywords: payload.documentInfoKeywords,
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
		payload.tables.forEach(function (tableName) {
			r.data.relationships.tables.data.push({
				type: "feature-layer",
				id: id + "/" + table.id
			});
		});

		return r;
	}
});
