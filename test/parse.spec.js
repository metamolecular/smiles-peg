import { expect } from 'chai';

import parse from '../index.js';

describe('parse', () => {
  it('parses C', () => {
    expect(parse('C')).to.eql({
      atom: 'C',
      bond: '-',
      branchCount: 0,
      branches: [ ],
      hasNext: false,
      isBracket: false,
      next: null,
      ringbondCount: 0,
      ringbonds: [ ]
    });
  });

  it('parses [13C]', () => {
    expect(parse('[13C]')).to.eql({
      atom: {
        charge: null,
        chirality: null,
        class: null,
        element: 'C',
        hcount: null,
        isotope: 13
      },
      bond: '-',
      branchCount: 0,
      branches: [ ],
      hasNext: false,
      isBracket: true,
      next: null,
      ringbondCount: 0,
      ringbonds: [ ]
    });
  });

  it('parses CC', () => {
    expect(parse('CC')).to.eql({
      atom: 'C',
      bond: '-',
      branchCount: 0,
      branches: [ ],
      hasNext: true,
      isBracket: false,
      ringbondCount: 0,
      ringbonds: [ ],
      next: {
        atom: 'C',
        bond: '-',
        branchCount: 0,
        branches: [ ],
        hasNext: false,
        isBracket: false,
        next: null,
        ringbondCount: 0,
        ringbonds: [ ]
      }
    })
  });
});