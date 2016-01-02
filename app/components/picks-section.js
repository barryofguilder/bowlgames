import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['picks'],

  didInsertElement() {
    let element = this.$();
    this.fixPickHeight(element);


    Ember.$(window).resize(() => {
      this.fixPickHeight(element);
    });
  },

  fixPickHeight(element) {
    // Clearing the height and setting it fixes where the background
    // color doesn't always extend the element.
    let row = element.find('.row');
    row.css('height', '');
    row.css('height', row.height());
  }
});
