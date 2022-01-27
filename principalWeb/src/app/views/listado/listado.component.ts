import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
//Atributos
public listadoEntradas: Entrada[];

  constructor() { 
    this.listadoEntradas = [
      {
        titulo:'Introducción a Angular',
        resumen:'En esta lección realizaremos una pequeña introducción a Angular'
      },
      {
        titulo:'Typescript como lenguaje para Angula',
        resumen:'Breve recorrido por el lenguaje de Typescript como...'
      },
      {
        titulo:'Componente en Angular',
        resumen:'Aprenderemos a usar los componentes en Angular y el...'
      }
    ]
  }

  ngOnInit(): void {
  }

  public mostrarTitulo(titulo:string):void {
    alert(`Entrada seleccionada: ${titulo}.`);
  }

}
