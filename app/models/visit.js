import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  who: DS.attr('string')
});
