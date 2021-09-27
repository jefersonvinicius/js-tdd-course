#!/usr/bin/env node
'use strict';

var _require = require('commander'),
  program = _require.program;

var packageJSON = require('../package.json');

// asd
program.version(packageJSON.version).description('Convert Bitcoin to any currency defined').parse(process.argv);
