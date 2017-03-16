import DS from 'ember-data';

export default DS.Model.extend({
/*
Source: http://resources.arcgis.com/en/help/arcgis-rest-api/#/Layer/02r3000000w6000000/

{
   "currentVersion": <currentVersion>, //Added at 10.0 SP1
   //properties applicable to both feature layers and tables
   "id" : <layerOrTableId>,
   "name" : "<layerOrTableName>",
   "type" : "<layerOrTableType>", //"Feature Layer" or "Table"
   "displayField" : "<field name>"
   "description" : "<description>",
   "copyrightText" : "<copyrightText>",
	"subtypeField": "<subtypeField>",	//Added at 10.5 
	"defaultSubtypeCode": <defaultSubtypeCode>, //Added at 10.5 
   "defaultVisibility": <true | false>,//Added at 10.1
   //Added at 10.1
    "editFieldsInfo": {
      "creationDateField": "<creationDateField>",
         "creatorField": "<creatorField>",
      "editDateField": "<editDateField>",
      "editorField": "<editorField>",
      "realm":"<realm>"
    },
    //Added at 10.1
    "ownershipBasedAccessControlForFeatures": {
     "allowOthersToUpdate": <true | false>,
     "allowOthersToDelete": <true | false>,
     "allowOthersToQuery": <true | false>
    },
    //Added at 10.1
    "syncCanReturnChanges": <true | false>,
    "relationships" : [
     {
       "id" : <relationshipId1>,
       "name" : "<relationshipName1>",
       "relatedTableId" : <relatedTableId1>,
       "cardinality" : "<esriRelCardinalityOneToOne>|<esriRelCardinalityOneToMany>|<esriRelCardinalityManyToMany>";,//Added at 10.1
       "role" : "<esriRelRoleOrigin>|<esriRelRoleDestination>";,//Added at 10.1
       "keyField" : "<keyFieldName2>",//Added at 10.1
       "composite" : <true>|<false>,//Added at 10.1
       "relationshipTableId": <attributedRelationshipClassTableId>,  //Added in 10.1. Returned only for attributed relationships
       "keyFieldInRelationshipTable": "<key field in AttributedRelationshipClass table that matches keyField>" //Added in 10.1. Returned only for attributed relationships
     },
     {
       "id" : <relationshipId2>,
       "name" : "<relationshipName2>",
       "relatedTableId" : <relatedTableId2>,
      "cardinality" : "<esriRelCardinalityOneToOne>|<esriRelCardinalityOneToMany>|<esriRelCardinalityManyToMany>";,//Added at 10.1
       "role" : "<esriRelRoleOrigin>|<esriRelRoleDestination>";,//Added at 10.1
       "keyField" : "<keyFieldName2>",//Added at 10.1
       "composite" : <true>|<false>,//Added at 10.1
       "relationshipTableId": <attributedRelationshipClassTableId>,  //Added in 10.1. Returned only for attributed relationships
       "keyFieldInRelationshipTable": "<key field in AttributedRelationshipClass table that matches keyField>" //Added in 10.1. Returned only for attributed relationships
     }
   ],
   "isDataVersioned": <true | false>, //Added at 10.1
   "supportsRollbackOnFailureParameter": <true | false>, //Added at 10.1
   "archivingInfo": {
    "supportsQueryWithHistoricMoment": <true | false>,
    "startArchivingMoment": <startArchivingMoment>
   }, //Added at 10.5
   "supportsStatistics": <true | false>, //Added at 10.1
   "supportsAdvancedQueries":<true | false>, //Added at 10.1
   //properties applicable to feature layers only
   "geometryType" : "<geometryType>",
   "minScale" : <minScale>,
   "maxScale" : <maxScale>,
   "effectiveMinScale" : <effectiveMinScale>,
   "effectiveMaxScale" : <effectiveMaxScale>,
   "extent" :  <envelope>,

   //for feature layers only
   "drawingInfo" : {
     "renderer" : <renderer>,
     "transparency" : <transparency>,
     "labelingInfo" : <labelingInfo>
   },
    "hasM":  <true | false>, //if the features in the layer have M values, the hasM property will be true
    "hasZ":  <true | false>, //if the features in the layer have Z values, the hasZ property will be true
   //if the layer / table supports querying based on time
    "enableZDefaults": <true | false>,//Added at 10.1
    "zDefault": <zDefaultValue>,//Added at 10.1
    "allowGeometryUpdates": <true | false>,//Added at 10.1
   "timeInfo" : {
     "startTimeField" : "<startTimeFieldName>",
     "endTimeField" : "<endTimeFieldName>",
     "trackIdField" : "<trackIdFieldName>",
     "timeExtent" : [<startTime>, <endTime>],
     "timeReference" : {
       "timeZone" : "<timeZone>",
       "respectsDaylightSaving" : <true | false>
     },
     "timeInterval" : <timeInterval>,
     "timeIntervalUnits" : "<timeIntervalUnits>"
   },

   //if the layer / table has attachments, the hasAttachments property will be true
   "hasAttachments" : <true | false>

   //from 10 onward - indicates whether the layer / table has htmlPopups
   "htmlPopupType" : "<esriServerHTMLPopupTypeNone | esriServerHTMLPopupTypeAsURL | esriServerHTMLPopupTypeAsHTMLText>",

   //layer / table fields
   "objectIdField" : "<objectIdFieldName>",
   "globalIdField" : "<globalIdFieldName>",
   "typeIdField" : "<typeIdFieldName>",
   //from 10.0 fields of type (String, Date, GlobalID, GUID and XML) have an additional length property, editable properties
   //from 10.1 fields have an additional nullable property
   "fields" : [
     {"name" : "<fieldName1>", "type" : "<fieldType1>", "alias" : "<fieldAlias1>", "length" : "<length1>", "editable" :    "<true | false>","nullable" : "<true | false>","domain" : <domain1>},
     {"name" : "<fieldName2>", "type" : "<fieldType2>", "alias" : "<fieldAlias1>", "length" : "<length2>", "editable" :    "<true | false>","nullable" : "<true | false>", "domain" : <domain2>}
   ],
   //layer / table sub-types
   "types" : [
     {
       "id" : <typeId1>,
       "name" : "<typeName1>",
       "domains" : {
         "<domainField11>" : <domain11>,
         "<domainField12>" : <domain12>
      },
       "templates" : [
         {
           "name" : "<templateName11>",
           "description" : "<templateDescription11>",
           "prototype" : <prototypicalFeature11>
         },
         {
           "name" : "<templateName12>",
           "description" : "<templateDescription12>",
           "prototype" : <prototypicalFeature12>
         }
       ]
     },
     {
       "id" : <typeId2>,
       "name" : "<typeName2>",
       "domains" : {
         "<domainField11>" : <domain21>,
         "<domainField12>" : <domain22>
       },
       "templates" : [
         {
           "name" : "<templateName21>",
           "description" : "<templateDescription21>",
           "prototype" : <prototypicalFeature21>,
           "drawingTool": "esriFeatureEditToolNone | esriFeatureEditToolPoint | esriFeatureEditToolLine | esriFeatureEditToolPolygon |
                        esriFeatureEditToolAutoCompletePolygon | esriFeatureEditToolCircle | esriFeatureEditToolEllipse | esriFeatureEditToolRectangle |
                        esriFeatureEditToolFreehand"
         },
         {
           "name" : "<templateName22>",
           "description" : "<templateDescription22>",
           "prototype" : <prototypicalFeature22>,
           "drawingTool": "esriFeatureEditToolNone | esriFeatureEditToolPoint | esriFeatureEditToolLine | esriFeatureEditToolPolygon |
                        esriFeatureEditToolAutoCompletePolygon | esriFeatureEditToolCircle | esriFeatureEditToolEllipse | esriFeatureEditToolRectangle |
                        esriFeatureEditToolFreehand"
         }
       ]
     }
   ],

   //layer / table templates - usually present when the layer / table has no types
			"templates" : [
     {
       "name" : "<templateName1>",
       "description" : "<templateDescription1>",
       "prototype" : <prototypicalFeature1>
     },
     {
       "name" : "<templateName2>",
       "description" : "<templateDescription2>",
       "prototype" : <prototypicalFeature2>
     }
   ],
   "subtypes":  [
     {
       "code": <SubtypeCode1>,
       "name": "<SubtypeDescription1>",
       "defaultValues": {
         "<fieldName1>": <default1>,
         "<fieldName2>": "<default2>"
       },
       "domains": {         
         "<fieldName1>": <domain11>,
         "<fieldName2>": <domain12>
       }
     },
     {
       "code": <SubtypeCode2>,
       "name": "<SubtypeDescription2>",
       "defaultValues": {
         "<fieldName1>": <default3>,
         "<fieldName2>": "<default4>"
       },
       "domains": {
         "<fieldName1>": <domain21>,
         "<fieldName2>": <domain22>
       }
     }
   ],
   //Maximum number of records returned in a query result
   "maxRecordCount": <maxRecordCount>, //Added at 10.1
   "standardMaxRecordCount" : <standardMaxRecordCount>, 
   "tileMaxRecordCount" : <tileMaxRecordCount>, 
   "maxRecordCountFactor" : <maxRecordCountFactor>,
   "supportedQueryFormats": "<supportedQueryFormats>", //Added at 10.1
   "hasStaticData" : <true | false>
   //comma separated list of supported capabilities - e.g. "Create,Delete,Query,Update,Editing"
   "capabilities" : "<capabilities>"

}
*/

    currentVersion: DS.attr("string"),
    layerId: DS.attr("string"),
    name: DS.attr("string"),
    type: DS.attr("string"), // "Feature Layer" or "Table"
    displayField: DS.attr("string"),
    description: DS.attr("string"),
    copyrightText: DS.attr("string"),
    subtypeField: DS.attr("string"),
    defaultSubtypeCode: DS.attr("string"),
    defaultVisibility: DS.attr("boolean"),
    creationDateField: DS.attr("string"),
    creatorField: DS.attr("string"),
    editDateField: DS.attr("string"),
    editorField: DS.attr("string"),
    realm: DS.attr("string"),
    allowOthersToUpdate: DS.attr("boolean"),
    allowOthersToDelete: DS.attr("boolean"),
    allowOthersToQuery: DS.attr("boolean"),
    syncCanReturnChanges: DS.attr("boolean"),
    relationships: DS.hasMany("layer-relationship"),    // layer-relationship
    isDataVersioned: DS.attr("boolean"),
    supportsRollbackOnFailureParameter: DS.attr("boolean"),
    supportsQueryWithHistoricMoment: DS.attr("boolean"),
    startArchivingMoment: DS.attr("string"),
    supportsStatistics: DS.attr("boolean"),
    supportsAdvancedQueries: DS.attr("boolean"),
    geometryType: DS.attr("string"),
    minScale: DS.attr("number"),
    maxScale: DS.attr("number"),
    effectiveMinScale: DS.attr("number"),
    effectiveMaxScale: DS.attr("number"),
    extent: DS.attr("string"),  // envelope
    drawingInfo: DS.attr("string"), // object
    hasM: DS.attr("boolean"),
    hasZ: DS.attr("boolean"),
    enableZDefaults: DS.attr("boolean"),
    zDefault: DS.attr("string"),
    allowGeometryUpdates: DS.attr("boolean"),
    startTimeField: DS.attr("string"),
    endTimeField: DS.attr("string"),
    trackIdField: DS.attr("string"),
    timeExtent: DS.attr("string"), // array of two numbers
    timeZone: DS.attr("string"),
    respectsDaylightSaving: DS.attr("boolean"),
    timeInterval: DS.attr("string"),
    timeIntervalUnits: DS.attr("string"),
    hasAttachments: DS.attr("boolean"),
    htmlPopupType: DS.attr("string"), // possible value: <esriServerHTMLPopupTypeNone | esriServerHTMLPopupTypeAsURL | esriServerHTMLPopupTypeAsHTMLText>
    objectIdField: DS.attr("string"),
    globalIdField: DS.attr("string"),
    typeIdField: DS.attr("string"),
    fields: DS.hasMany("field"),  // array of field object {"name" : "<fieldName1>", "type" : "<fieldType1>", "alias" : "<fieldAlias1>", "length" : "<length1>", "editable" :    "<true | false>","nullable" : "<true | false>","domain" : <domain1>}
    types: DS.attr("string"),   // array of subtypes  
    templates: DS.attr("string"),   // array of templates 
    maxRecordCount: DS.attr("number"),
    standardMaxRecordCount: DS.attr("number"),
    tileMaxRecordCount: DS.attr("number"),
    maxRecordCountFactor: DS.attr("number"),
    supportedQueryFormats: DS.attr("string"),
    hasStaticData: DS.attr("boolean"),
    capabilities: DS.attr("string")
});
