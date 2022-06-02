import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from "./angularMaterial/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ComprobarSocioDirective } from './directives/comprobarSocio.directive';
import { SociosService } from './socios.service';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ComprobarSocioDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule
  ],
  providers: [SociosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
