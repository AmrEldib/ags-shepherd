import DS from 'ember-data';
import Service from './service';

export default Service.extend({
	/*
{
"currentVersion": <currentVersion>, //Added at 10.0 SP1
"serviceDescription" : "<serviceDescription>",
"mapName" : "<mapName>"
"description": "<description>",
"copyrightText" : "<copyrightText>",
"supportsDynamicLayers" : <true|false>, //Added at 10.1
"layers": [ //the spatial layers published by this service
    {
    "id" : <layerId1>,
    "name" : "<layerName1>",
    "defaultVisibility" : <true|false>,
    "parentLayerId" : <parentLayerId1>,
    "subLayerIds" : [<subLayerId11>, <subLayerId12>]
    "minScale": <minScale1>, //Added at 10.0 SP1
    "maxScale": <maxScale1>
    },
    {
    "id" : <layerId2>,
    "name" : "<layerName2>",
    "defaultVisibility" : <true|false>,
    "parentLayerId" : <parentLayerId2>,
    "subLayerIds" : [<subLayerId21>, <subLayerId22>]
    "minScale": <minScale1>,
    "maxScale": <maxScale1>
    }
],
"tables": [ //the tables published by this service - from 10 onward
    {
    "id" : <tableId1>,
    "name" : "<tableName1>"
    },
    {
    "id" : <tableId2>,
    "name" : "<tableName2>"
    }
],
"spatialReference" : {<spatialReference>},
"singleFusedMapCache" : <true | false>,
"tileInfo": {
    "rows" : <rows>, "cols" : <cols>, "dpi" : <dpi>, "format" : <format>, "compressionQuality" : <quality>,
    "origin" : {<point>},
    "spatialReference" : {<spatialReference>},
    "lods": [
        {"level" : <level1>, "resolution" : <resolution1>, "scale" : <scale1> },
        {"level" : <level2>, "resolution" : <resolution2>, "scale" : <scale2> }
    ]
},
"initialExtent" : {<envelope>},
"fullExtent" : {<envelope>},
//from 10 onward - if the map supports querying and exporting maps based on time
"timeInfo" : {
  "timeExtent": [<startTime>, <endTime>],
  "timeReference": {
    "timeZone": "<timeZone>",
    "respectsDaylightSaving": <true | false>
  },
  "timeRelation": "<esriTimeRelationOverlaps | esriTimeRelationOverlapsStartWithinEnd | esriTimeRelationAfterStartOverlapsEnd>",
  "defaultTimeInterval" : <time interval>,
  "defaultTimeIntervalUnits" : "<esriTimeUnitsCenturies | esriTimeUnitsDays | esriTimeUnitsDecades |
                             esriTimeUnitsHours | esriTimeUnitsMilliseconds | esriTimeUnitsMinutes |
                             esriTimeUnitsMonths | esriTimeUnitsSeconds | esriTimeUnitsWeeks | esriTimeUnitsYears |
                             esriTimeUnitsUnknown>",
  "defaultTimeInterval" : <time interval>,
  "defaultTimeWindow" : <time window>,
  "hasLiveData" : <true | false>,
},
"units" : "<units>",
"supportedImageFormatTypes" : "<supportedImageFormatTypes>",
"documentInfo": {
    "<key1>" : "<value1>",
    "<key2>" : "<value2>"
},
//comma separated list of supported capabilities - e.g. "Map,Query,Data"
"capabilities" : "<capabilities>",
"maxRecordCount" : <maxRecordCount>, //Added at 10.1
"maxImageHeight" : <maxImageHeight>, //Added at 10.1
"maxImageWidth" : <maxImageWidth>, //Added at 10.1
"minScale" : <minimum map scale>, //Added at 10.1
"maxScale" : <maximum map scale>, //Added at 10.1
"tileServers" : ["<tileServerUrl1>","<tileServerUrl2>","<tileServerUrl2>"], //Added at 10.1
"supportedQueryFormats" : "<query output formats>",
"exportTilesAllowed": <true | false>,
"maxExportTilesCount: <export tiles limit>,
"supportedExtensions": "<FeatureServer,KmlServer,MobileServer,WCSServer,WFSServer,WMSServer,NAServer,SchematicsServer>",
"resampling" : <true | false> // Added at 10.3
}
    */
	mapName: DS.attr("string"),
	description: DS.attr("string"),
	copyrightText: DS.attr("string"),
	supportsDynamicLayers: DS.attr("boolean"),
	layers: DS.hasMany("mapLayer"),	// layer
	tables: DS.hasMany("mapTable"),	// table
	spatialReference: DS.attr("spatial-reference"), 	// spatial reference
	singleFusedMapCache: DS.attr("boolean"),
	tileRows: DS.attr("number"),
	tileCols: DS.attr("number"),
	tileDpi: DS.attr("number"),
	tileFormat: DS.attr("string"),
	tileCompressionQuality: DS.attr("number"),
	tileOriginX: DS.attr("number"),
	tileOriginY: DS.attr("number"),
	tileSpatialReference: DS.attr("spatial-reference"),	// spatial reference
	tileLods: DS.attr("tile-lod"),	// tile lods
	initialExtent: DS.attr("string"),	// envelope
	fullExtent: DS.attr("string"), 		// envelope
    timeExtent: DS.attr("string"), // array of two numbers
    timeZone: DS.attr("string"),
    respectsDaylightSaving: DS.attr("boolean"),
	timeRelation: DS.attr("string"),
    defaultTimeInterval: DS.attr("number"),
    defaultTimeIntervalUnits: DS.attr("string"),
	defaultTimeWindow: DS.attr("string"),
	hasLiveData: DS.attr("boolean"),
	units: DS.attr("string"),	// units
	supportedImageFormatTypes: DS.attr("string"),
	documentInfo: DS.attr("string"),	// document Info
	capabilities: DS.attr("string"),	// capabilities is a comma separated list
	maxRecordCount: DS.attr("number"),
	maxImageHeight: DS.attr("number"),
	maxImageWidth: DS.attr("number"),
	minScale: DS.attr("number"),
	maxScale: DS.attr("number"),
	tileServers: DS.attr("string"),	// array of urls
	supportedQueryFormats: DS.attr("string"),
	exportTilesAllowed: DS.attr("boolean"),
	maxExportTilesCount: DS.attr("number"),
	supportedExtensions: DS.attr("string"),
	resampling: DS.attr("boolean")
});
