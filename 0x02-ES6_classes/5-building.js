/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
