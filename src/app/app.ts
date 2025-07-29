import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { CalculationsComponent } from './calculations/calculations.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CalculationsComponent,
    FormComponent,
    ResultComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  number = signal<number | null>(null);
  result = signal<number | null>(null);

  handleNumber(n: number) {
    this.number.set(n);
  }

  handleCalculations(result: number) {
    this.result.set(result);
  }
}
