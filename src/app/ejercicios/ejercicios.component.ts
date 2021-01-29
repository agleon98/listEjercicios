import { EjercicioService } from './../ejercicio.service';
import { Ejercicio } from './../ejercicio';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
})
export class EjerciciosComponent implements OnInit {
  ejercicios:Ejercicio[];
  ejercicioSelected :Ejercicio;

  constructor(private ejercicioService:EjercicioService) { }

  getEjercicios():void{
     this.ejercicioService.getEjercicios().subscribe(
       data => {this.ejercicios = data}
     );
  }
  ngOnInit(): void {
    this.getEjercicios();
  }
  onSelectEjercicio(e:Ejercicio):void{
    console.log("Entraste aki"+e.id);
    this.ejercicioSelected=e;
  }
}
