import DS from 'ember-data';
import AgsFolder from './agsfolder';

export default AgsFolder.extend({
	parent: DS.belongsTo('agsfolder', { inverse: 'children' })
});
