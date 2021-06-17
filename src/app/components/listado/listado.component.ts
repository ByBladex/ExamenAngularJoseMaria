import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/class/usuario';
import { ServicioDatosService } from 'src/app/services/servicio-datos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  usuarios: Usuario[]

  constructor(private servicioDatos: ServicioDatosService) {
    this.usuarios = this.servicioDatos.getUsuarios();
   }

  ngOnInit(): void {
  }

}
