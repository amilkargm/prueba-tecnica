import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CalculationsService } from '../services/calculations.service';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  submitEvent = output<number>();
  fb: FormBuilder = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    number: [1, [Validators.required, Validators.min(1)]],
  });

  onSubmit() {
    const isValid = this.form.valid;
    this.form.markAllAsTouched();
    if (!isValid) {
      return;
    }
    const formValue = this.form.value;
    const number = formValue['number'];
    this.submitEvent.emit(number);
  }
}
