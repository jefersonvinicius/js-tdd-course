#!/usr/bin/env node

const { program } = require('commander');
const packageJSON = require('../package.json');
const { convertBTC } = require('./ConvertBTC');

program
  .version(packageJSON.version)
  .description('Convert Bitcoin to any currency defined')
  .option('-c, --currency <currency>', 'Currency to be converted')
  .option('-a, --amount <amount>', 'Amount to be converted')
  .parse(process.argv);

const options = program.opts();
console.log(convertBTC(options.currency, options.amount));
