import Model, { hasMany } from '@ember-data/model';

export default class BarModel extends Model {
  @hasMany('foo', { async: true }) foos;
}
