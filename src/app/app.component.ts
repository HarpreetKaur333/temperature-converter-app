import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { TemperatureConverterComponentReactiveForms } from './temperature-converter-reactive-forms/temperature-converter-reactive-forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemperatureConverterComponent,TemperatureConverterComponentReactiveForms],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temperature-converter-app';
}
