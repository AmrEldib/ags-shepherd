import DS from 'ember-data';

export default DS.Serializer.extend({
    	normalizeResponse: function (store, primaryModelClass, payload, id, requestType) {
		let r = {
			data: {
				id: id,
				type: primaryModelClass.modelName,
				attributes: {
					currentVersion: payload.currentVersion,
					layerId: payload.id,
					name: payload.name,
					type: payload.type,
					displayField: payload.displayField,
					description: payload.description,
					copyrightText: payload.copyrightText,
					subtypeField: payload.subtypeField,
					defaultSubtypeCode: payload.defaultSubtypeCode,
					defaultVisibility: payload.defaultVisibility,
					creationDateField: payload.editFieldsInfo.creationDateField,
					creatorField: payload.editFieldsInfo.creatorField,
					editDateField: payload.editFieldsInfo.editDateField,
					editorField: payload.editFieldsInfo.editorField,
					realm: payload.editFieldsInfo.realm,
					allowOthersToUpdate: payload.ownershipBasedAccessControlForFeatures.allowOthersToUpdate,
					allowOthersToDelete: payload.ownershipBasedAccessControlForFeatures.allowOthersToDelete,
					allowOthersToQuery: payload.ownershipBasedAccessControlForFeatures.allowOthersToQuery,
					syncCanReturnChanges: payload.syncCanReturnChanges,
                    // layer-relationships
					isDataVersioned: payload.isDataVersioned,
					supportsRollbackOnFailureParameter: payload.supportsRollbackOnFailureParameter,
					supportsQueryWithHistoricMoment: payload.archivingInfo.supportsQueryWithHistoricMoment,
					startArchivingMoment: payload.archivingInfo.startArchivingMoment,
					supportsStatistics: payload.supportsStatistics,
					supportsAdvancedQueries: payload.supportsAdvancedQueries,
					geometryType: payload.geometryType,
					minScale: payload.minScale,
					maxScale: payload.maxScale,
					effectiveMinScale: payload.effectiveMinScale,
					effectiveMaxScale: payload.effectiveMaxScale,
                    // extent
                    // drawingInfo
					hasM: payload.hasM,
					hasZ: payload.hasZ,
					enableZDefaults: payload.enableZDefaults,
					zDefault: payload.zDefault,
					allowGeometryUpdates: payload.allowGeometryUpdates,
					startTimeField: payload.timeInfo.startTimeField,
                    endTimeField: payload.timeInfo.endTimeField,
					trackIdField: payload.timeInfo.trackIdField,
					timeExtent: payload.timeInfo.timeExtent,
					timeZone: payload.timeInfo.timeReference.timeZone,
                    respectsDaylightSaving: payload.timeInfo.timeReference.respectsDaylightSaving,
					timeInterval: payload.timeInfo.timeInterval,
					timeIntervalUnits: payload.timeInfo.timeIntervalUnits,
					hasAttachments: payload.hasAttachments,
                    htmlPopupType: payload.htmlPopupType,
					objectIdField: payload.objectIdField,
					globalIdField: payload.globalIdField,
					typeIdField: payload.typeIdField,
                    // fields
                    // types
                    // templates
                    maxRecordCount: payload.maxRecordCount,
					standardMaxRecordCount: payload.standardMaxRecordCount,
					tileMaxRecordCount: payload.tileMaxRecordCount,
					maxRecordCountFactor: payload.maxRecordCountFactor,
                    supportedQueryFormats: payload.supportedQueryFormats,
					hasStaticData: payload.hasStaticData,
					capabilities: payload.capabilities
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
