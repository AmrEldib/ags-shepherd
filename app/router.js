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

    this.route('FeatureServer', {
      path: '/featureServer/:serviceName'
    });

    this.route('GeometryServer', {
      path: '/geometryServer/:serviceName'
    });

    this.route('GPServer', {
      path: '/gpServer/:serviceName'
    });

    this.route('MobileServer', {
      path: '/mobileServer/:serviceName'
    });

    this.route('ImageServer', {
      path: '/imageServer/:serviceName'
    });

    this.route('NAServer', {
      path: '/naserver/:serviceName'
    });
  });
});

export default Router;
