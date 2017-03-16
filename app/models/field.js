import DS from 'ember-data';

export default DS.Model.extend({
	/*
	http://resources.arcgis.com/en/help/arcgis-rest-api/#/field/02r300000051000000/
	Syntax 
	{
		"name": "IMAGEURL",
		"alias": "IMAGEURL",
		"type": "esriFieldTypeString",  
			Available values include: esriFieldTypeBlob | esriFieldTypeDate | esriFieldTypeDouble | esriFieldTypeGeometry | esriFieldTypeGlobalID | esriFieldTypeGUID | esriFieldTypeInteger | esriFieldTypeOID | esriFieldTypeRaster | esriFieldTypeSingle | esriFieldTypeSmallInteger | esriFieldTypeString | esriFieldTypeXML.
		"length": 255,
		"editable": true,
		"nullable": true,
		"domain": null
	}
	*/
	name: DS.attr("string"),
	alias: DS.attr("string"),
	type: DS.attr("string"),
	length: DS.attr("number"),
	editable: DS.attr("boolean"),
	nullable: DS.attr("boolean"),
	domain: DS.attr("string")
});
