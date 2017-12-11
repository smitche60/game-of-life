/* eslint-env mocha */
const logic = require('../logic.js');
// const assert = require('assert');
const chai = require('chai');

const { expect } = chai;

describe('countLiveNeighbors', () => {
  const testBoard = [[0, 1, 1], [0, 0, 1], [1, 1, 0]];
  it('should treat out of bounds cells as dead', () => {
    expect(logic.countLiveNeighbors(0, 0, testBoard)).to.equal(1);
  });
  it('should check diagonal cells when counting live neighbors', () => {
    expect(logic.countLiveNeighbors(1, 0, testBoard)).to.equal(3);
  });
  it('should not count itself as a neighbor', () => {
    expect(logic.countLiveNeighbors(0, 1, testBoard)).to.equal(2);
  });
});
