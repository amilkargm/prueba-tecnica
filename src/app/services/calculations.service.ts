import { Injectable } from '@angular/core';
import { Calculation } from '../classes/calculation.class';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalculationsService {
  constructor() {}

  calculate(n: number): Observable<number> {
    const calculation = new Calculation();
    const result = of(calculation.series(n));
    return result;
  }
}
