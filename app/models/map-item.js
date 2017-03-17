import DS from 'ember-data';

export default DS.Model.extend({
	itemId: DS.attr("number"),
	name: DS.attr("string")
});
