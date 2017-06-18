import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('visit');
  },

  actions: {

    saveVisit(newVisit) {
      newVisit.save().then(() => this.transitionTo('signin.induction'));
    },

    willTransition() {
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
