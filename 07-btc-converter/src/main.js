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

async function start() {
  const ora = (await import('ora')).default;

  const options = program.opts();

  const spinner = ora({
    text: 'Fetching...',
    color: 'yellow',
  });

  spinner.start();
  try {
    const result = await convertBTC(options.currency, options.amount);
    spinner.stop();
    console.log(btcPresenter(result));
  } catch (error) {
    spinner.stop();
    console.log(chalk.red(error.message));
  }
}

start();
