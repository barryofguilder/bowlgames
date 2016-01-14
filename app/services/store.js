import Ember from 'ember';
import ajax from 'ic-ajax';
import config from 'bowlgames/config/environment';

export default Ember.Service.extend({
  find(name, year) {
    return ajax(`${config.baseURL}data/${year}.json`).then( (result) => {
      return result[name];
    });
  }
});
