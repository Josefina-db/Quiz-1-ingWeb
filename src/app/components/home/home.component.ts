import { Component, OnInit } from '@angular/core';
import { Usuarios, ListaUsuarios } from '../../interfaces/usuarios';
import { ClienteServiceService } from '../../service/cliente-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  //inicializa vector listaClientes de tipo usuarios
  listaClientes: Usuarios[] = [];
  //Se recibe el servicio en variable _cliente
  constructor(private _cliente: ClienteServiceService) {}

  ngOnInit(): void {
    //se obtiene lista clientes con el servicio para utilizarla en home.component.html
    this.listaClientes = this._cliente.getClientes();
    console.log(this.listaClientes);
  }
}
