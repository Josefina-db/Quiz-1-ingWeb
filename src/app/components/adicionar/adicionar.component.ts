import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Usuarios, ListaUsuarios } from '../../interfaces/usuarios';
import { ClienteServiceService } from '../../service/cliente-service.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss'],
})
export class AdicionarComponent implements OnInit {
  ruta2: any;
  formulario: FormGroup;
  lista: Array<Usuarios> = ListaUsuarios;

    constructor(
      private _cliente: ClienteServiceService,
      private ruta: ActivatedRoute,
      private fb: FormBuilder,
      private router: Router
    ) 
  {
    this.ruta2 = this.ruta.params.subscribe((parametros) => {
      console.log('nombre' + parametros['nombre']);
    });
    //validacion de campos
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  crear() {
    if (this.formulario.valid) {
      const cliente: Usuarios = {
        nombre: this.formulario.controls.nombre.value,
        apellido: this.formulario.controls.apellido.value,
        genero: this.formulario.controls.genero.value,
        pais: this.formulario.controls.pais.value,
        ciudad: this.formulario.controls.ciudad.value,
      };
      this._cliente.addCliente(cliente);
      this.formulario.reset();
      this.router.navigate(['']);
    }
  }
}
