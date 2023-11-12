import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoffeesListComponent } from './components/coffees-list/coffees-list.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';
import { AddCoffeefeeComponent } from './components/add-coffeefee/add-coffeefee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoffeesListComponent,
    CoffeeComponent,
    RandomCoffeeComponent,
    AddCoffeefeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
