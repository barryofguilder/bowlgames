import Ember from 'ember';

export default Ember.Route.extend({
  year: 'hoops',

  model(params) {
    // This path is for when no parameter is supplied
    if (!params.year) {
      return null;
    }

    return Ember.RSVP.hash({
      meta: this.get('store').find('meta', params.year),
      games: this.get('store').find('games', params.year),
      people: this.get('store').find('people', params.year)
    });
  },

  serialize: function(model) {
    // If we got here without a 'year' (and therefore without a model)
    // Redirect to the most recent year
    if (!model) {
      var mostRecentYear = this.modelFor('application').get('lastObject');
      this.transitionTo('years.year', mostRecentYear);
    }

    // Otherwise, let Ember handle it as usual
    return this._super.apply(this, arguments);
  }
});
