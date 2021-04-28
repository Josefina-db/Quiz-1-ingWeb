import { Injectable } from '@angular/core';
import { ListaUsuarios, Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})

export class ClienteServiceService {
  lista: Usuarios[]=[];
  constructor() { }
  //añade un usuario a la lista
  addCliente(cliente:Usuarios){
    this.lista.push(cliente);
  }

  //obtiene la lista de clientes
  getClientes(){
    return this.lista;
  }

  //
  setClientes(lista:Usuarios[]){
    this.lista=lista;
  }
}
