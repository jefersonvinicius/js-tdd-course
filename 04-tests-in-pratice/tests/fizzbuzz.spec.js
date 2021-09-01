import { expect } from 'chai';
import fizzbuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzbuzz(3)).to.be.equal('Fizz');
    expect(fizzbuzz(9)).to.be.equal('Fizz');
  });
  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzbuzz(5)).to.be.equal('Buzz');
    expect(fizzbuzz(10)).to.be.equal('Buzz');
  });
  it('should return `FizzBuzz` when multiple of 5 and 3', () => {
    expect(fizzbuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzbuzz(30)).to.be.equal('FizzBuzz');
  });
  it('should return n when when it not multiple of 3 or 5', () => {
    expect(fizzbuzz(2)).to.be.equal(2);
    expect(fizzbuzz(7)).to.be.equal(7);
  });
  it('should return 0 when 0', () => {
    expect(fizzbuzz(0)).to.be.equal(0);
  });
});
