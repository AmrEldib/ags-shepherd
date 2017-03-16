import DS from 'ember-data';

export default DS.Model.extend({
	currentVersion: DS.attr("string"),
    children: DS.hasMany('folder', { inverse: 'parent' } ),
    services: DS.hasMany('service')
});
