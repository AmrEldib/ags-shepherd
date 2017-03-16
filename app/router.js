import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('root', {
    path: '/p/:protocol/h/:host/i/:instance'
  });
});

export default Router;
