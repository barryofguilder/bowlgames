import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('years', { path: '/' }, function() {
    this.route('year', { path: ':year' });
  });
});

export default Router;
