import Ember from 'ember';

export function isMapServer(params/*, hash*/) {
  return params[0].endsWith("MapServer");
}

export default Ember.Helper.helper(isMapServer);
