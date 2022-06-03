import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { SociosService } from '../socios.service';


export function createComprobarSocioValidator(sociosService:SociosService): ValidatorFn{

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value){
      return null;
    }

    let nsocioValid = true;
    let socios = sociosService.getNsocios();

    console.log("valor:" + value + "socios registrados: " + socios);

    if (socios == null){
      nsocioValid == true;

    }else{
      for(let i = 0 ; i < socios.length; i++){
        if (socios[i] === value){
          console.log("valor:" + value + "socios registrados: " + socios[i])
          nsocioValid = false;
        }
      }

    }

    return !nsocioValid ? {comprobarSocio: true}: null;

  }

}
