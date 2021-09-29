#!/usr/bin/env node

const chalk = require('chalk');
const { program } = require('commander');
const packageJSON = require('../package.json');
const { convertBTC, btcPresenter } = require('./ConvertBTC');

program
  .version(packageJSON.version)
  .description('Convert Bitcoin to any currency defined')
  .option('-c, --currency <currency>', 'Currency to be converted', 'USD')
  .option('-a, --amount <amount>', 'Amount to be converted', 1)
  .parse(process.argv);

const options = program.opts();
convertBTC(options.currency, options.amount)
  .then((result) => {
    console.log(btcPresenter(result));
  })
  .catch((error) => {
    console.log(error.response);
    console.log(chalk.red(error.message));
  });
