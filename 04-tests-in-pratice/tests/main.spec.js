const { expect } = require('chai');
const calc = require('../src/main');

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exist the calc lib', () => {
      expect(calc).to.exist;
    });
    it('should exist the method `sum`', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });
    it('should exist the method `sub`', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });
    it('should exist the method `div`', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
    it('should exist the method `mult`', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum 2 + 2', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when sum 6 - 2', () => {
      expect(calc.sub(6, 2)).to.be.equal(4);
    });
    it('should return -4 when sum 6 - 10', () => {
      expect(calc.sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('should return 12 when sum 6 * 2', () => {
      expect(calc.mult(6, 2)).to.be.equal(12);
    });
  });

  describe('Div', () => {
    it('should return 4 when sum 8 / 2', () => {
      expect(calc.div(8, 2)).to.be.equal(4);
    });
    it('should get error when divide by zero', () => {
      // const error = new calc.DivisionByZero();
      // expect(error).to.be.an.instanceOf(calc.DivisionByZero);
      try {
        calc.div(10, 0);
      } catch (error) {
        expect(error).to.be.an.instanceOf(calc.DivisionByZero);
      }
    });
  });
});
