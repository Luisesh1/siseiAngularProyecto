import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor() { }
  platillosList() {
    return [
      {
        nombre: 'restaurant generico',
        sucursal: 'tres rios',
        nombrePlatillo: 'sopita',
        descripcionPlatillo: 'sopita rica'
      },
      {
        nombre: 'restaurant generico2',
        sucursal: 'tres rios2',
        nombrePlatillo: 'sopita2',
        descripcionPlatillo: 'sopita ric2a'
      },
      {
        nombre: 'restaurant generico3',
        sucursal: 'tres rios3',
        nombrePlatillo: 'sopita3',
        descripcionPlatillo: 'sopita ric3a'
      },
      {
        nombre: 'restaurant generico4',
        sucursal: 'tres rios4',
        nombrePlatillo: 'sopita4',
        descripcionPlatillo: 'sopita ric4a'
      }
    ];
  }
}
