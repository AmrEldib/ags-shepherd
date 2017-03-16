import DS from 'ember-data';
import Service from './service';

export default Service.extend({
    /*
    "executionType": "esriExecutionTypeAsynchronous",
    "resultMapServerName": "911CallsHotspot",
    */
    executionType: DS.attr("string"),
    resultMapServerName: DS.attr("string")
});
