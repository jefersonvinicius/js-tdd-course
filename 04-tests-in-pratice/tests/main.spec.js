import { expect } from 'chai';
import { sum, div, mult, sub, DivisionByZero } from '../src/main';

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });
    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });
    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum 2 + 2', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when sum 6 - 2', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
    it('should return -4 when sum 6 - 10', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 12 when sum 6 * 2', () => {
      expect(mult(6, 2)).to.be.equal(12);
    });
  });

  describe('Div', () => {
    it('should return 4 when sum 8 / 2', () => {
      expect(div(8, 2)).to.be.equal(4);
    });
    it('should get error when divide by zero', () => {
      try {
        div(10, 0);
      } catch (error) {
        expect(error).to.be.an.instanceOf(DivisionByZero);
      }
    });
  });
});
