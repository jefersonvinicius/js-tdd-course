const { expect } = require('chai');
const { convertBTC } = require('../src/ConvertBTC');

describe('ConvertBTC', () => {
  it('should return default values when no params are provided', () => {
    expect(convertBTC()).to.be.equal('1 BTC to USD = 2000.00');
  });

  it('should return correct current and amount', () => {
    expect(convertBTC('BRL', 10)).to.be.equal('10 BTC to BRL = 2000.00');
  });
});
