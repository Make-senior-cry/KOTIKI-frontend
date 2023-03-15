export default class Pagination {
  constructor({
    dataList, hasPrev, hasNext, skip, limit,
  }) {
    this.dataList = dataList;
    this.hasPrev = hasPrev;
    this.hasNext = hasNext;
    this.skip = skip;
    this.limit = limit;
  }
}
