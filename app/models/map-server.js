import DS from 'ember-data';
import Service from './service';

export default Service.extend({
    /*
    "mapName" : "<mapName>"
    "description": "<description>",
    "copyrightText" : "<copyrightText>",
    "supportsDynamicLayers" : <true|false>,
    */
    mapName: DS.attr("string"),
    description: DS.attr("string"),
    copyrightText: DS.attr("string"),
    supportsDynamicLayers: DS.attr("boolean")
});