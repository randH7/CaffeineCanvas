import { Component } from '@angular/core';
import { Coffee } from 'src/app/models/coffee';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffees-list',
  templateUrl: './coffees-list.component.html',
  styleUrls: ['./coffees-list.component.css']
})
export class CoffeesListComponent {

  coffees: Coffee[] = [];

  selectedCoffee: Coffee | null = null;

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.loadCoffees();
  }

  loadCoffees(): void {
    this.coffeeService.getAllCoffees().subscribe({
      next: (data) => {
        this.coffees = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onCoffeeSelected(coffee: Coffee) {
    this.selectedCoffee = coffee;
  }

}
