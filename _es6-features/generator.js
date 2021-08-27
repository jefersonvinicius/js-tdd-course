function createFibGenerator() {
  let fibA = 0,
    fibB = 1,
    fibIndex = 0;

  function* generator() {
    if (fibIndex === 0) {
      fibIndex++;
      yield { value: fibA, index: 0 };
    }

    if (fibIndex === 1) {
      fibIndex++;
      yield { value: fibB, index: 1 };
    }

    while (true) {
      const result = fibA + fibB;
      fibA = fibB;
      fibB = result;
      fibIndex++;
      yield { value: result, index: fibIndex - 1 };
    }
  }

  return generator();
}
