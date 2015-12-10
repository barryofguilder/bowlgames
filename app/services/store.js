import Ember from 'ember';
import Ajax from 'ic-ajax';
import ENV from 'bowlgames/config/environment';

export default Ember.Service.extend({
  find(name, year) {
    return Ajax(`${ENV.baseURL}data/${year}.json`).then( (result) => {
      return result[name];
    });
  }
});
