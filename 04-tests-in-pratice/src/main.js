export class DivisionByZero extends Error {
  constructor() {
    super("It's not possible divide by zero");
    this.name = this.constructor.name;
  }
}

export const sum = (a, b) => a + b;

export const sub = (a, b) => a - b;

export const mult = (a, b) => a * b;

export const div = (a, b) => {
  if (b === 0) throw new DivisionByZero();
  return a / b;
};
