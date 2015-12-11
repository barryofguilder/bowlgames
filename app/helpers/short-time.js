import Ember from 'ember';
import moment from 'moment';

export function shortTime(params) {
  var isoDate = new Date(params[0]);
  return moment(isoDate).format('MMM D, YYYY h:mm A');
}

export default Ember.Helper.helper(shortTime);
