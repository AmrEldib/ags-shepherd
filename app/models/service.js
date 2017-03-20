import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    type: Ember.computed('id', function() {
        return this.get('id').substring(this.get('id').lastIndexOf("/") + 1);
    }),
    serviceName: Ember.computed('id', function() {
        let idWithoutType = this.get('id').substring(0, this.get('id').lastIndexOf("/"));
        return idWithoutType.substring(idWithoutType.lastIndexOf("/") + 1);
    }),
    currentVersion: DS.attr("string"),
    serviceDescription: DS.attr("string"),
    parent: DS.belongsTo('agsfolder', { inverse: 'services' })
});
