#!/usr/bin/node

export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
        if (this.constructor !== Building && !this.evacuationWarningMessage) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
    }

    get sqft() {
        return this._sqft;
    }

    set sqft(sqft) {
        if (typeof sqft !== 'number') {
            throw new TypeError('Sqft must be a number');
        }
        this._sqft = sqft;
    }
}