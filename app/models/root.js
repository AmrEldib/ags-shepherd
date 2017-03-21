import DS from 'ember-data';
import AgsFolder from './agsfolder';

export default AgsFolder.extend({
    name: Ember.computed('id', function() {
        return "root";
    })
});
