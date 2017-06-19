import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  who: DS.attr('string'),

  isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  isNameLongEnough: Ember.computed.gte('name.length', 1),
  isCompanyLongEnough: Ember.computed.gte('company.length', 1),
  isWhoLongEnough: Ember.computed.gte('who.length', 1),

  isValid: Ember.computed.and('isValidEmail', 'isNameLongEnough', 'isCompanyLongEnough', 'isWhoLongEnough'),
  isNotValid: Ember.computed.not('isValid')
});
