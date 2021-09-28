const axios = require('axios').default;

const api = axios.create({
  baseURL: 'https://api.alternative.me/v2',
});

const AVAILABLE_CURRENCIES = ['USD', 'EUR', 'GBP', 'RUB', 'JPY', 'CAD', 'KRW', 'PLN'];

class InvalidCurrency extends Error {
  constructor(currency) {
    super(`Expected currency be one of ${AVAILABLE_CURRENCIES.join(', ')}. But got ${currency}`);
  }
}

exports.convertBTC = async (currency = 'USD', amount = 1) => {
  if (!AVAILABLE_CURRENCIES.includes(currency)) throw new InvalidCurrency(currency);
  const { data } = await api.get('/ticker/bitcoin');
  const btcValue = data.data[1].quotes[currency].price;
  return `${amount} BTC to ${currency} = ${(btcValue * amount).toFixed(2)}`;
};

exports.InvalidCurrency = InvalidCurrency;
