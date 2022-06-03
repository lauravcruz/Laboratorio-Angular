import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import { SociosService } from '../service/socios.service';
import { createComprobarSocioValidator } from './comprobarSocio.validator';

@Directive ({
  selector: "[comprobarSocio]",
  providers: [{provide: NG_VALIDATORS, useExisting: ComprobarSocioDirective, multi: true}],
})

export class ComprobarSocioDirective implements Validator{

  constructor(private sociosService:SociosService){}

  validate(control: AbstractControl): ValidationErrors | null{
    return createComprobarSocioValidator(this.sociosService)(control);
  }
}
