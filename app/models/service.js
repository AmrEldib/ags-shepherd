import DS from 'ember-data';

export default DS.Model.extend({
    currentVersion: DS.attr("string"),
    serviceDescription: DS.attr("string"),
    parent: DS.belongsTo('agsfolder', { inverse: 'services' })
});
