import { Injectable } from '@angular/core';
import { Socio } from './Socio'

@Injectable({
  providedIn: 'root'
})
export class SociosService {

  private listaSocios: Socio [];

  constructor() {
    this.listaSocios = [];
  }

  getSocios(){
    return this.listaSocios;
  }

  addSocio(socio: Socio){
    this.listaSocios.push(socio);
  }

  nuevoSocio(): Socio{
    return {
      nombre: '',
      apellidos: '',
      nsocio: '',
      DNI: '',
      telefono: '',
      sexo: ''
    };
  }
}
