import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['team'],
  classNameBindings: ['isWinner:winner'],

  isWinner: Ember.computed('team.isWinner', function() {
    return this.get('team.isWinner');
  })
});
