import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import { SociosService } from '../socios.service';
import { createComprobarSocioValidator } from './comprobarSocio.validator';

@Directive ({
  selector: "[comprobarSocio]",
  providers: [{provide: NG_VALIDATORS, useExisting: ComprobarSocioDirective, multi: true}, SociosService],
})

export class ComprobarSocioDirective implements Validator{

  constructor(private SociosService:SociosService){}

  validate(control: AbstractControl): ValidationErrors | null{
    return createComprobarSocioValidator(this.SociosService)(control);
  }
}
