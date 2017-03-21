import DS from 'ember-data';
import AgsFolder from './agsfolder';

export default AgsFolder.extend({
    name: Ember.computed('id', function() {
        return this.get('id').substring(this.get('id').lastIndexOf("/") + 1);
    }),
	parent: DS.belongsTo('agsfolder', { inverse: 'folders' })
});
