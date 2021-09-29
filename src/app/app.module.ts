import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgGridModule } from 'ag-grid-angular';
import { EmployeeComponentComponent } from './employee/employee-component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, HelloComponent, EmployeeComponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
