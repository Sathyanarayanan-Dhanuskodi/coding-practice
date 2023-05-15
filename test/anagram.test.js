const { expect, assert } = require('chai');
const chai = require('chai');
const { handleAnagram } = require('../anagram');

chai.should();

describe('anagram test', () => {
  it('should return true for valid anagram', (done) => {
    const s = 'cat';
    const t = 'tac';
    assert.isTrue(
      handleAnagram(s, t),
      'Given words are anagram but code returns false'
    );
    done();
  });

  it('should return true for valid anagram', (done) => {
    const s = 'recollect';
    const t = 'collecter';
    assert.isTrue(
      handleAnagram(s, t),
      'Given words are anagram but code returns false'
    );
    done();
  });

  it('should return true for valid anagram', (done) => {
    const s = 'return';
    const t = 'turner';
    assert.isTrue(
      handleAnagram(s, t),
      'Given words are anagram but code returns false'
    );
    done();
  });

  it('should return false for invalid anagram', (done) => {
    const s = 'program';
    const t = 'funcion';
    assert.isFalse(
      handleAnagram(s, t),
      'Given words are not anagram but code returs true'
    );
    done();
  });

  it('should return false for invalid anagram', (done) => {
    const s = 'return';
    const t = 'turn';
    assert.isFalse(
      handleAnagram(s, t),
      'Given words are not anagram but code returs true'
    );
    done();
  });
});
