#!/usr/bin/env node
"use strict";

var _require = require('commander'),
    program = _require.program;

var packageJSON = require('../package.json');

var _require2 = require('./ConvertBTC'),
    convertBTC = _require2.convertBTC,
    btcPresenter = _require2.btcPresenter;

program.version(packageJSON.version).description('Convert Bitcoin to any currency defined').option('-c, --currency <currency>', 'Currency to be converted', 'USD').option('-a, --amount <amount>', 'Amount to be converted', 1).parse(process.argv);
var options = program.opts();
convertBTC(options.currency, options.amount).then(function (result) {
  console.log(btcPresenter(result));
})["catch"](function (error) {
  console.log("error ".concat(error.message));
});