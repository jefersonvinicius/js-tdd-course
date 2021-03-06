const nock = require('nock');
const chai = require('chai');
const chalk = require('chalk');
const chaiAsPromised = require('chai-as-promised');
const { convertBTC, InvalidCurrency, btcPresenter } = require('../src/ConvertBTC');

chai.use(chaiAsPromised);

const { expect } = chai;

describe('ConvertBTC', () => {
  const responseMock = {
    data: {
      1: {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        website_slug: 'bitcoin',
        rank: 1,
        circulating_supply: 18828606,
        total_supply: 18828606,
        max_supply: 21000000,
        quotes: {
          USD: {
            price: 42105.0,
            volume_24h: 31017848033,
            market_cap: 791332372796,
            percentage_change_1h: 0.38562094398141,
            percentage_change_24h: -4.05680757991651,
            percentage_change_7d: -1.92791383923147,
            percent_change_1h: 0.38562094398141,
            percent_change_24h: -4.05680757991651,
            percent_change_7d: -1.92791383923147,
          },
          EUR: {
            price: 36012.4065,
            volume_24h: 26529565422.6249,
            market_cap: 676826578452.419,
            percent_change_1h: 0.38562094398141,
            percent_change_24h: -4.05680757991651,
            percent_change_7d: -1.92791383923147,
          },
        },
        last_updated: 1632830324,
      },
    },
    metadata: {
      timestamp: 1632830324,
      num_cryptocurrencies: 3105,
      error: null,
    },
    isMock: true,
  };

  it('should use USD and 1 as default values', async () => {
    nock('https://api.alternative.me/v2').get('/ticker/bitcoin/').query({ convert: 'USD' }).reply(200, responseMock);
    expect(await convertBTC()).to.be.deep.equals({ amount: 1, currency: 'USD', total: 42105.0 });
  });

  it('should use USD and 3 as parameters values', async () => {
    nock('https://api.alternative.me/v2').get('/ticker/bitcoin/').query({ convert: 'USD' }).reply(200, responseMock);
    expect(await convertBTC('USD', 3)).to.be.deep.equals({ amount: 3, currency: 'USD', total: 126315.0 });
  });

  it('should use EUR and 3 as parameters values', async () => {
    nock('https://api.alternative.me/v2').get('/ticker/bitcoin/').query({ convert: 'EUR' }).reply(200, responseMock);
    expect(await convertBTC('EUR', 3)).to.be.deep.equals({ amount: 3, currency: 'EUR', total: 108037.21949999999 });
  });

  it('should get InvalidCurrency when currency is"nt available', async () => {
    expect(convertBTC('invalid_currency', 3)).to.eventually.rejectedWith(new InvalidCurrency('invalid_currency'));
  });
});

describe('btcPresenter', () => {
  it('should colorize to present the conversion ', async () => {
    const data = { amount: 1, currency: 'USD', total: 42105.0 };
    const expectText = `${chalk.blue(1)} BTC to ${chalk.yellow('USD')} = ${chalk.green('42105.00')}`;
    expect(btcPresenter(data)).to.be.equal(expectText);
  });
});
