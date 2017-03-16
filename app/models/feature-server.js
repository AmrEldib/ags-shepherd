import DS from 'ember-data';
import Service from './service';

export default Service.extend({
/*
http://resources.arcgis.com/en/help/arcgis-rest-api/#/Feature_Service/02r3000000z2000000/

Syntax
{
  "currentVersion": <currentVersion>,
  "serviceDescription": "<serviceDescription>",

  "hasVersionedData": <true | false>,
  "supportsDisconnectedEditing": <true | false>,
  "hasStaticData" : <true | false>,
  "maxRecordCount" : "<maxRecordCount>", ,
  "supportedQueryFormats": "<supportedQueryFormats>",
  "capabilities": "<capabilities>",
  "description": "<description>",
  "copyrightText": "<copyrightText>",
  "spatialReference": {<spatialReference>},
  "initialExtent": {<envelope>},
  "fullExtent": {<envelope>},
  "allowGeometryUpdates": <true | false>,
  "units": "<units>",
  "syncEnabled" : <true | false>,
  "syncCapabilities" : {
    "supportsASync" : <true | false>,
    "supportsRegisteringExistingData" : <true | false>,
    "supportsSyncDirectionControl" : <true | false>,
    "supportsPerLayerSync" : <true | false>,
    "supportsPerReplicaSync" : <true | false>,
    "supportsRollbackOnFailure" : <true | false>
  },
  "editorTrackingInfo" : {
    "enableEditorTracking" : <true | false>,
    "enableOwnershipAccessControl" : <true | false>,
    "allowOthersToUpdate" : <true | false>,
    "allowOthersToDelete" : <true | false>
  },
  "documentInfo": {
   "<key1>": "<value1>",
   "<key2>": "<value2>"
   },
  //the feature layers published by this service
  "layers": [
    { "id": <layerId1>, "name": "<layerName1>" },
    { "id": <layerId2>, "name": "<layerName2>" }
  ],
  //the non-spatial tables published by this service
  "tables": [
    { "id": <tableId1>, "name": "<tableName1>" },
    { "id": <tableId2>, "name": "<tableName2>" }
  ]
  "enableZDefaults": <true | false>,
  "zDefault": <zDefaultValue>,
}
*/
    hasVersionedData: DS.attr("boolean"),
    supportsDisconnectedEditing: DS.attr("boolean"),
    hasStaticData: DS.attr("boolean"),
    maxRecordCount: DS.attr("number"),
    supportedQueryFormats: DS.attr("string"),
    capabilities: DS.attr("string"),
    description: DS.attr("string"),
    copyrightText: DS.attr("string"),
    spatialReference: DS.attr("string"), // TODO: spatialReference
    initialExtent: DS.attr("string"), // TODO: envelope
    fullExtent: DS.attr("string"), // TODO: envelope
    allowGeometryUpdates: DS.attr("boolean"),
    units: DS.attr("string"),
    syncEnabled: DS.attr("boolean"),
    supportsASync: DS.attr("boolean"),
    supportsRegisteringExistingData: DS.attr("boolean"),
    supportsSyncDirectionControl: DS.attr("boolean"),
    supportsPerLayerSync: DS.attr("boolean"),
    supportsPerReplicaSync: DS.attr("boolean"),
    supportsRollbackOnFailure: DS.attr("boolean"),
    enableEditorTracking: DS.attr("boolean"),
    enableOwnershipAccessControl: DS.attr("boolean"),
    allowOthersToUpdate: DS.attr("boolean"),
    allowOthersToDelete: DS.attr("boolean"),
    documentInfoTitle: DS.attr("string"),
    documentInfoAuthor: DS.attr("string"),
    documentInfoComments: DS.attr("string"),
    documentInfoSubject: DS.attr("string"),
    documentInfoCategory: DS.attr("string"),
    documentInfoKeywords: DS.attr("string"),
    layers: DS.hasMany("feature-layer"),
    tables: DS.hasMany("feature-layer"),
    enableZDefaults: DS.attr("boolean"),
    zDefault: DS.attr("string")
});
