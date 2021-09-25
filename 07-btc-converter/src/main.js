#!/usr/bin/env node

const { program } = require('commander');
const packageJSON = require('../package.json');

program.version(packageJSON.version).description('Convert Bitcoin to any currency defined').parse(process.argv);
