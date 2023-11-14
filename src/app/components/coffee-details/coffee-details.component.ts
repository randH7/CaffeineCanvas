import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-coffee-details',
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.css']
})
export class CoffeeDetailsComponent {

  @Input() 
  coffee: any;

  @Output() 
  onCoffeeDeletedEvent = new EventEmitter<any>();

  selectedCharacter: any;


  constructor(private coffeeService: CoffeeService) {}
  ngOnInit(): void {
    if (!this.coffee) {
      const id = 1;
      this.loadCoffee(id);
    }
  }


  loadCoffee(id : number): void {
    this.coffeeService.getCoffeeById(id).subscribe({
      next: (data) => {
        this.coffee = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  

}
