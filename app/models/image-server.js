import DS from 'ember-data';
import Service from './service';

export default Service.extend({
    name: DS.attr("string"),
    description: DS.attr("string"),
});
