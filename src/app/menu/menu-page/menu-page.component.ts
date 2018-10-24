import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  title = 'app';
  cardArray = new Array(10);
  constructor() { }

  funcionSalvaje() {
    alert('otra cosa');
  }
  ngOnInit() {
  }

}
