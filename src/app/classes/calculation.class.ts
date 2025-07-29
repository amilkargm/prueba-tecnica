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
    // Se usa la fórmula para calcular el número triangular
    let result = (n * (n + 1)) / 2;
    console.log('Triangular:', result, n);
    return result;
  }

  private fibonacciNumber(n: number): number {
    // En el caso de los primeros dos numeros (0 y 1) y números negativos, el
    // resultado es igual al número recibido.
    if (n <= 1) {
      console.log('Fibonacci:', 0, n);
      return n;
    }

    let fibNumber = 0;

    // Declaramos los primeros dos números de la serie considerando n > 1 (n-1 y n-2).
    let previousNumber1 = 1;
    let previousNumber2 = 0;

    for (let i = 2; i <= n; i++) {
      // Se obtiene el valor del siguiente número en la serie.
      fibNumber = previousNumber1 + previousNumber2;
      // El valor de n-2 se vuelve n-1 para continuar con la secuencia.
      previousNumber2 = previousNumber1;
      // El valor n-1 se vuelve el último número de la serie para sumarse en la
      // siguiente iteración.
      previousNumber1 = fibNumber;
    }
    // Una vez terminado el bucle, se devuelve el último valor de n-1
    console.log('Fibonacci:', previousNumber1, n);
    return previousNumber1;
  }

  private primeNumber(n: number): number {
    // Los numeros negativos, 0 y 1 no se consideran primos.
    if (n <= 1) {
      console.log('Prime:', 0, n);
      return 0;
    }
    // Recorremos los valores a partir del número 2 que es el primer número primo.
    for (let i = 2; i < n; i++) {
      // Si el residuo de n entre cualquier número en la serie antes de llegar a
      // n da 0, el número no es primo.
      if (n % i === 0) {
        console.log('Prime:', 0, n);
        return 0;
      }
    }
    // Si el código llega aquí, el número es primo
    console.log('Prime:', 1, n);
    return 1;
  }
}
