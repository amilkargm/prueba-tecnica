export class Calculation {
  constructor() {}
  public series(n: number): number {
    let finalResult: number = 0;
    finalResult += 2 * this.primeNumber(n - 2);
    finalResult *= 3 * this.triangularNumber(n - 2);
    finalResult *= 7 * this.fibonacciNumber(n - 1);
    return finalResult;
  }

  private triangularNumber(n: number): number {
    let result = (n * (n + 1)) / 2;
    return result;
  }

  private fibonacciNumber(n: number): number {
    if (n <= 1) {
      return n;
    }

    let fibNumber = 0;

    let previousNumber1 = 1;
    let previousNumber2 = 0;

    for (let i = 2; i <= n; i++) {
      fibNumber = previousNumber1 + previousNumber2;
      previousNumber2 = previousNumber1;
      previousNumber1 = fibNumber;
    }
    return previousNumber1;
  }

  private primeNumber(n: number): number {
    if (n <= 1) {
      return 0;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return 0;
      }
    }
    return 1;
  }
}
