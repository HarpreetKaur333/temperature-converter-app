// temperature-converter.component.ts
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],  // Import ReactiveFormsModule for reactive forms
  templateUrl: './temperature-converter-reactive-forms.html',
  styleUrls: ['./temperature-converter-reactive-forms.css']
})
export class TemperatureConverterComponentReactiveForms {
  // Define a FormGroup to handle temperature conversion
  temperatureForm = new FormGroup({
    celsius: new FormControl<number | null>(null),  // Accepts number or null
    fahrenheit: new FormControl<number | null>(null)  // Accepts number or null
  });

  constructor() {
    // Subscribe to changes in the celsius form control
    this.temperatureForm.get('celsius')?.valueChanges.subscribe(value => {
      if (value !== null) {
        const fahrenheit = (value * 9 / 5) + 32;
        this.temperatureForm.get('fahrenheit')?.setValue(fahrenheit, { emitEvent: false });
      } else {
        this.temperatureForm.get('fahrenheit')?.setValue(null, { emitEvent: false });
      }
    });

    // Subscribe to changes in the fahrenheit form control
    this.temperatureForm.get('fahrenheit')?.valueChanges.subscribe(value => {
      if (value !== null) {
        const celsius = (value - 32) * 5 / 9;
        this.temperatureForm.get('celsius')?.setValue(celsius, { emitEvent: false });
      } else {
        this.temperatureForm.get('celsius')?.setValue(null, { emitEvent: false });
      }
    });
  }
}
