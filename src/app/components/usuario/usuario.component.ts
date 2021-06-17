import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/class/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input('usuario') usuario: Usuario; 

  constructor() { }

  ngOnInit(): void {
  }

}
