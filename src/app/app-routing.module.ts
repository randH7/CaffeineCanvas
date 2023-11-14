import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CoffeesListComponent } from './components/coffees-list/coffees-list.component';
import { RandomCoffeeComponent } from './components/random-coffee/random-coffee.component';
import { AddCoffeeComponent } from './components/add-coffee/add-coffee.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "coffees",
    component: CoffeesListComponent
  },
  {
    path: "random-coffee",
    component: RandomCoffeeComponent
  },
  {
    path: "new-coffee",
    component: AddCoffeeComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
