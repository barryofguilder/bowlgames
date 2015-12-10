import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['pick', 'col-xs-4'],
  classNameBindings: ['isWinner:winner'],

  isWinner: Ember.computed('pick.isCorrect', function() {
    return this.get('pick.isCorrect');
  })
});
