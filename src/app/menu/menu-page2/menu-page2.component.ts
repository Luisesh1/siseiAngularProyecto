import { PlatillosService } from './../../platillos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page2',
  templateUrl: './menu-page2.component.html',
  styleUrls: ['./menu-page2.component.css']
})
export class MenuPage2Component implements OnInit {
  platillosList = [];
  constructor(private platillosService: PlatillosService) { }
  ngOnInit() {
    this.platillosList = this.platillosService.platillosList();
  }

}
