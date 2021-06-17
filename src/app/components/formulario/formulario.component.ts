import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioDatosService } from 'src/app/services/servicio-datos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formValidado: FormGroup

  constructor(private _builder: FormBuilder, private servicioDatos: ServicioDatosService) {
    this.formValidado = this._builder.group({
      nombre: ['', Validators.required],
      clave: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })
   }

  ngOnInit(): void {
  }

  registro(){
    this.servicioDatos.registrarUsuario(this.formValidado.controls.nombre.value, this.formValidado.controls.clave.value);
  }

}
