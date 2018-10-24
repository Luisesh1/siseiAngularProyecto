import { PlatillosService } from './platillos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DishCardComponent } from './components/dish-card/dish-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PlatilloComponent } from './menu/platillo/platillo.component';
import {Routes, RouterModule} from '@angular/router';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';
import { MenuPage2Component } from './menu/menu-page2/menu-page2.component';


const appRoutes: Routes = [
  { path: '', component: MenuPageComponent },
  { path: 'receta', component: PlatilloComponent },
  { path: 'menu2', component: MenuPage2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    DishCardComponent,
    MenuPageComponent,
    PlatilloComponent,
    MenuPage2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [PlatillosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
