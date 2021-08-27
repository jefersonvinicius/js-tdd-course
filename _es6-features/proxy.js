class ViewModel {
  observers = {};

  constructor(data) {
    this._data = data;
    this._proxy = new Proxy(this._data, {
      set: (target, param, value) => {
        this.observers[param]?.(value);
        this._data[param] = value;
      },
    });
  }

  get data() {
    return this._proxy;
  }

  addObserve(property, fn) {
    if (!this._data.hasOwnProperty(property)) throw new Error(`ViewModel don't has ${property} property`);
    this.observers[property] = fn;
  }
}
