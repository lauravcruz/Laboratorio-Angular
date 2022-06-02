import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SociosService {

  private listaSocios: string [];

  constructor() {
    this.listaSocios = [];
  }

   addNsocio(n: string){
    this.listaSocios.push(n);
  }

   getNsocios(): string[]{
    console.log("en el servicio hay: " + this.listaSocios);
    return this.listaSocios;
  }

}
