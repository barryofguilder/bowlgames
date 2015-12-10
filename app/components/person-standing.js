import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['person'],
  classNameBindings: ['isWinner:winner'],

  isWinner: Ember.computed('person.isWinner', function() {
    return this.get('person.isWinner');
  })
});
