export class Square {
  constructor(x) {
    this._x = x;
  }

  area() {
    return this._x * this._x;
  }
}

export class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  area() {
    return Math.PI * (this._radius * this._radius);
  }
}
