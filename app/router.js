import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('root', {
    path: '/p/:protocol/h/:host/i/:instance'
  }, function() {
    this.route('folder', {
      path: '/f/:folder'
    });

    this.route('MapServer', {
      path: '/mapServer/:serviceName'
    });
  });
});

export default Router;
