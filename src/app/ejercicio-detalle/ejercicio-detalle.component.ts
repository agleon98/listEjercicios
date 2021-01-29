import { EjercicioService } from './../ejercicio.service';
import { Ejercicio } from './../ejercicio';
import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.css']
})
export class EjercicioDetalleComponent implements OnInit {
 ejercicio: Ejercicio;
  constructor(private route: ActivatedRoute, private service: EjercicioService) { }

  ngOnInit(): void {
    this.getEjercicio();
  }
  getEjercicio(): void{
   const id =+this.route.snapshot.paramMap.get('id');
   this.service.getEjercicio(id).subscribe(d=>this.ejercicio=d);
}
}
