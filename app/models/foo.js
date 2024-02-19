import Model, { belongsTo } from '@ember-data/model';

export default class FooModel extends Model {
  @belongsTo('bar', { async: true }) bar;
}
