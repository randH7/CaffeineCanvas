import { Component, OnInit } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-random-coffee',
  templateUrl: './random-coffee.component.html',
  styleUrls: ['./random-coffee.component.css']
})
export class RandomCoffeeComponent implements OnInit{

  coffee : any
  errorOccurred = false; 

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffeeService.getRandomCoffee().subscribe({
      next: (data) => {
        this.coffee = data;
        console.log(this.coffee)
      },
      error: (error) => {
        this.errorOccurred = true;
        console.error('Error fetching random coffee:', error);
      }
    });
  }

}
