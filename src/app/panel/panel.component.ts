import { EjercicioService } from './../ejercicio.service';
import { Component, OnInit } from '@angular/core';
import { Ejercicio } from './../ejercicio';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  ejercicios:Ejercicio[];

  constructor(private ejercicioService:EjercicioService) { }

  getEjercicios():void{
     this.ejercicioService.getEjercicios().subscribe(
       data => {this.ejercicios = data.slice(0,4)}
     );
  }
  ngOnInit(): void {
    this.getEjercicios();
  }

}
