import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { _getOptionScrollPosition } from '@angular/material/core';
import { Socio } from './Socio';
import { SociosService } from '../socios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  socio: Socio = {
        nombre: "",
        apellidos: "",
        nsocio: "",
        DNI: "",
        telefono: "",
        sexo: ""
  }

  socios: Array<Socio> = [];

  i: any = 0;
  crear: boolean = true; /*Este booleano nos permite controlar si está añadiéndose (true) o actualizándose (false) la persona*/

  constructor(private SociosService:SociosService) {}

  ngOnInit(): void {}

  agregar(form: NgForm){

    if(this.crear === true ){

      this.socios.push(this.socio);
      this.SociosService.addNsocio(this.socio.nsocio);
      console.log(this.SociosService.getNsocios());

        this.socio = {
          nombre: "",
          apellidos: "",
          nsocio: "",
          DNI: "",
          telefono: "",
          sexo: "",
        }

    }else {
        this.socios[this.i] = this.i;
        this.crear = true;
    }
    form.resetForm();
  }

  modificar(i: number): void {
    this.socio = this.socios[i];
    this.i = i;
    this.crear = false;
  }

  borrar(i: number): void {
    this.socios.splice(i, 1)
  }

}


