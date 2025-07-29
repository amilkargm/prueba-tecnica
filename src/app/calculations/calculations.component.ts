import { Component, effect, inject, input, output } from '@angular/core';
import { CalculationsService } from '../services/calculations.service';

@Component({
  selector: 'app-calculations',
  imports: [],
  templateUrl: './calculations.component.html',
  styleUrl: './calculations.component.css',
})
export class CalculationsComponent {
  calculationsService = inject(CalculationsService);
  number = input<number | null>(null);
  resultEvent = output<number>();

  resultEffect = effect(() => {
    if (this.number() != null) {
      this.handleCalculations(this.number()!);
    }
  });

  handleCalculations(number: number) {
    this.calculationsService.calculate(number).subscribe((n) => {
      this.resultEvent.emit(n);
    });
  }
}
