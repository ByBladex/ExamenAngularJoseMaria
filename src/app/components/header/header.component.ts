import { Component, OnInit } from '@angular/core';
import { ServicioDatosService } from 'src/app/services/servicio-datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  alternado: boolean;
  constructor(private servicioDatos: ServicioDatosService) { }

  ngOnInit(): void {
  }

  alternar(){
    this.servicioDatos.alternar();
  }

  getAlternado(){
    this.alternado = this.servicioDatos.alternado;
    this.alternar();
  }
}
