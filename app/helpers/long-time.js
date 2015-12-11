import Ember from 'ember';
import moment from 'moment';

export function longTime(params) {
  var isoDate = new Date(params[0]);
  return moment(isoDate).format('MMMM D, YYYY h:mm A');
}

export default Ember.Helper.helper(longTime);
