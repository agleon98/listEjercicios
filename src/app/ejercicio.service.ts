import { Observable, of } from 'rxjs';
import { Ejercicio, Ejercicios } from './ejercicio';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EjercicioService {

  constructor() { }

  public getEjercicios(): Observable<Ejercicio[]> {
    return of(Ejercicios);
  }
  public getEjercicio(id): Observable<Ejercicio> {
    return of(Ejercicios.find(e => e.id===id));
  }
}
