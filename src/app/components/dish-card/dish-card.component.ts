import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent implements OnInit {
  comentariosLista = [];
  comentario = '';
  nombre = 'default';
  sucursal = 'default';
  nombrePlatillo = 'default';
  descripcionPlatillo = 'default';
  constructor() {
    this.hasOwner = true;
    this.compartir = () => { alert('se ha compartido'); };
  }
  @Input() hasOwner: boolean;
  @Input() compartir: Function;
  @Input() data: Function;
  ngOnInit() {
    if (this.data) {
      this.nombre = this.data.nombre;
      this.sucursal = this.data.sucursal;
      this.nombrePlatillo = this.data.nombrePlatillo;
      this.descripcionPlatillo = this.data.descripcionPlatillo;
    }
  }
  agregar() {
    this.comentariosLista.push(this.comentario);
    this.comentario = '';
  }
  pressEnter(val) {
    console.log(val);
    if (val.keyCode === 13) {
      this.agregar();
    }
  }
}
