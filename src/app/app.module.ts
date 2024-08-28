import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule to use ngModel in templates

import { AppComponent } from './app.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component'; // Import the new component

@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    BrowserModule,
    TemperatureConverterComponent,
    FormsModule  // Import FormsModule for template-driven forms
  ],
  providers: [],
  bootstrap: []  // Bootstrap the AppComponent
})
export class AppModule { }
