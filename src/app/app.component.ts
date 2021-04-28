import { Component, OnInit } from '@angular/core';
import { Usuarios, ListaUsuarios } from './interfaces/usuarios';
import { ClienteServiceService } from './service/cliente-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quiz';
  constructor(private _cliente:ClienteServiceService){

  }

  ngOnInit(){
    const lista:Usuarios[]=ListaUsuarios;
    this._cliente.setClientes(lista);
  }
}
