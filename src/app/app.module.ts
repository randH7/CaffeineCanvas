import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CoffeesListComponent } from './components/coffees-list/coffees-list.component';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';
import { AddCoffeeComponent } from './components/add-coffee/add-coffee.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CoffeeDetailsComponent } from './components/coffee-details/coffee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoffeesListComponent,
    RandomCoffeeComponent,
    AddCoffeeComponent,
    NotFoundComponent,
    NavBarComponent,
    CoffeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
