const { exec } = require('child_process');
const { expect } = require('chai');

const btcConverter = './src/main.js';
const packageJSON = require('../package.json');

describe('Main CLI', () => {
  it('should get cli version', (done) => {
    exec(`${btcConverter} --version`, (error, stdout, _) => {
      if (error) throw error;
      expect(stdout).to.includes(packageJSON.version);
      done();
    });
  });

  it('should get cli description', (done) => {
    exec(`${btcConverter} --help`, (error, stdout, _) => {
      if (error) throw error;
      expect(stdout).to.includes('Convert Bitcoin to any currency defined');
      done();
    });
  });
});
