#!/usr/bin/node

export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(size) {
    this._size = size;
  }

  get size() {
    return this._size;
  }

  set location(location) {
    this._location = location;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](cast) {
    if (cast === 'number') {
      return this._size;
    }
    if (cast === 'string') {
      return this._location;
    }
  }
}
