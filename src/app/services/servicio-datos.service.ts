import { Injectable } from '@angular/core';
import { Usuario } from '../class/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosService {

  alternado: boolean = true;
  listaUsuarios: Usuario[]

  constructor() {
    this.listaUsuarios = [(new Usuario("examen","examen"))];
   }

   alternar(){
     this.alternado = !this.alternado;
   }

   getUsuarios(){
     return this.listaUsuarios;
   }

   registrarUsuario(nombre: string, clave: string){
    this.listaUsuarios.push(new Usuario(nombre, clave));
   }
}
