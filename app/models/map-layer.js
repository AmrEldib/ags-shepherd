import DS from 'ember-data';
import MapItem from './map-item';

export default MapItem.extend({
	defaultVisibility: DS.attr("boolean"),
	parentLayerId: DS.attr("number"),
	subLayerIds: DS.attr("array"), // array of numbers
	minScale: DS.attr("number"),
	maxScale: DS.attr("number")
});
