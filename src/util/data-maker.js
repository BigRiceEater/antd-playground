import uuid from 'uuid/v4';

export default class DataMaker {
  static genOrders(numToGen) {
    return new Array(numToGen)
      .fill(0)
      .map(i => ({ id: uuid().replace(/-/g, '') }));
  }
}
