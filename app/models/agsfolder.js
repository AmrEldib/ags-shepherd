import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
	currentVersion: DS.attr("string"),
    protocol: Ember.computed('id', function() {
        return this.get('id').substring(0, this.get('id').indexOf("://"));
    }),
    host: Ember.computed('id', function() {
        let host = this.get('id');
        host = host.replace("https://", "");
        host = host.replace("http://", "");
        host = host.substring(0, host.indexOf("/"));
        return host;
    }),
    instance: Ember.computed('id', function() {        
        let i = this.get('id').substring(0, this.get('id').lastIndexOf("/rest/services"));
        i = i.replace("https://", "");
        i = i.replace("http://", "");
        i = i.substring(i.indexOf("/") + 1);
        return i;
    }),
    folders: DS.hasMany('folder', { inverse: 'parent' } ),
    services: DS.hasMany('service')
});
