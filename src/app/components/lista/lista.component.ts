import { Component, OnInit } from '@angular/core';
import {Usuarios,ListaUsuarios} from '../../interfaces/usuarios';
import { ClienteServiceService } from '../../service/cliente-service.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  listaU:Array<Usuarios>=[];
  constructor(private _cliente:ClienteServiceService) { }


  
  ngOnInit(): void {
     //se obtiene lista clientes con el servicio para utilizarla en lista.component.html
    this.listaU=this._cliente.getClientes(); //asigna los clientes
  }

}
