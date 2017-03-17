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
					layers: DS.hasMany("mapLayer"),	// layer
					tables: DS.hasMany("mapTable"),	// table
					//spatialReference: DS.attr("string"), 	// spatial reference
					singleFusedMapCache: payload.singleFusedMapCache,
					tileRows: payload.tileInfo.rows,
					tileCols: payload.tileInfo.cols,
					tileDpi: payload.tileInfo.dpi,
					tileFormat: payload.tileInfo.format,
					tileCompressionQuality: payload.tileInfo.compressionQuality,
					tileOriginX: payload.tileInfo.origin.x,
					tileOriginY: payload.tileInfo.origin.y,
					//tileSpatialReference: DS.attr("string"), // spatial reference
					//tileLods: DS.hasMany("tileLods"), // tile lods
					//initialExtent: DS.attr("string"), // envelope
					//fullExtent: DS.attr("string"), // envelope
					//timeExtent: DS.attr("string"), // array of two numbers
					timeZone: payload.timeInfo.timeReference.timeZone,
					respectsDaylightSaving: payload.timeInfo.timeReference.respectsDaylightSaving,
					timeRelation: payload.timeReference.timeRelation,
					defaultTimeInterval: payload.defaultTimeInterval,
					defaultTimeIntervalUnits: payload.defaultTimeIntervalUnits,
					defaultTimeWindow: payload.defaultTimeWindow,
					hasLiveData: payload.hasLiveData,
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
					maxExportTilesCount: maxExportTilesCount,
					supportedExtensions: supportedExtensions,
					resampling: payload.resampling
				},
			}
		};

		return r;
	}
});
