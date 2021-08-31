module.exports = {
  sum: (a, b) => a + b,
  sub: (a, b) => a - b,
  mult: (a, b) => a * b,
  div(a, b) {
    if (b === 0) throw new this.DivisionByZero();
    return a / b;
  },
  DivisionByZero: class DivisionByZero extends Error {
    constructor() {
      super("It's not possible divide by zero");
      this.name = this.constructor.name;
    }
  },
};
