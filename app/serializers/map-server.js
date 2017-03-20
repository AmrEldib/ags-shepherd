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
					mapName: payload.mapName,
					description: payload.description,
					copyrightText: payload.copyrightText,
					supportsDynamicLayers: payload.supportsDynamicLayers,
					//layers: DS.hasMany("mapLayer"),	// layer
					//tables: DS.hasMany("mapTable"),	// table
					spatialReference: payload.spatialReference, 	// spatial reference
					singleFusedMapCache: payload.singleFusedMapCache,
					tileRows: (payload.tileInfo) ? payload.tileInfo.rows : undefined,
					tileCols: (payload.tileInfo) ? payload.tileInfo.cols : undefined,
					tileDpi: (payload.tileInfo) ? payload.tileInfo.dpi : undefined,
					tileFormat: (payload.tileInfo) ? payload.tileInfo.format : undefined,
					tileCompressionQuality: (payload.tileInfo) ? payload.tileInfo.compressionQuality : undefined,
					tileOriginX: (payload.tileInfo && payload.tileInfo.origin) ? payload.tileInfo.origin.x : undefined,
					tileOriginY: (payload.tileInfo && payload.tileInfo.origin) ? payload.tileInfo.origin.y : undefined,
					tileSpatialReference: (payload.tileInfo) ? payload.tileInfo.spatialReference : undefined, // spatial reference
					tileLods: (payload.tileInfo) ? payload.tileInfo.lods : undefined, // tile lods
					//initialExtent: DS.attr("string"), // envelope
					//fullExtent: DS.attr("string"), // envelope
					//timeExtent: DS.attr("string"), // array of two numbers
					timeZone: (payload.timeInfo && payload.timeInfo.timeReference) ? payload.timeInfo.timeReference.timeZone : undefined,
					respectsDaylightSaving: (payload.timeInfo && payload.timeInfo.timeReference) ?  payload.timeInfo.timeReference.respectsDaylightSaving : undefined,
					timeRelation: (payload.timeInfo) ?  payload.timeInfo.timeRelation : undefined,
					defaultTimeInterval: (payload.timeInfo) ?  payload.timeInfo.defaultTimeInterval : undefined,
					defaultTimeIntervalUnits: (payload.timeInfo) ? payload.defaultTimeIntervalUnits : undefined,
					defaultTimeWindow: (payload.timeInfo) ?  payload.timeInfo.defaultTimeWindow : undefined,
					hasLiveData: (payload.timeInfo) ? payload.timeInfo.hasLiveData : undefined,
					//units: DS.attr("string"), // units
					supportedImageFormatTypes: payload.supportedImageFormatTypes,
					//documentInfo: DS.attr("string"), // document Info
					//capabilities: DS.attr("string"), // capabilities is a comma separated list. transform
					maxRecordCount: payload.maxRecordCount,
					maxImageHeight: payload.maxImageHeight,
					maxImageWidth: payload.maxImageWidth,
					minScale: payload.minScale,
					maxScale: payload.maxScale,
					//tileServers: DS.attr("string"), // array of urls
					supportedQueryFormats: payload.supportedQueryFormats,
					exportTilesAllowed: payload.exportTilesAllowed,
					maxExportTilesCount: payload.maxExportTilesCount,
					supportedExtensions: payload.supportedExtensions,
					resampling: payload.resampling
				}
			}
		};

		return r;
	}
});
