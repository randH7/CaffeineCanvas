import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoffeeService } from 'src/app/services/coffee.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-add-coffee',
  templateUrl: './add-coffee.component.html',
  styleUrls: ['./add-coffee.component.css']
})
export class AddCoffeeComponent {

  
  coffeeForm: FormGroup;
  nameInput: FormControl;
  taglineInput: FormControl;
  descriptionInput: FormControl;
  firstRoastedInput: FormControl;
  roasterTipsInput: FormControl;
  strengthLevelInput: FormControl;
  contributedByInput: FormControl;


  constructor(private toast: NgToastService, private coffeeService: CoffeeService) {

    this.nameInput = new FormControl("", Validators.required);
    this.taglineInput = new FormControl("", Validators.required);
    this.descriptionInput = new FormControl("", Validators.required);
    this.firstRoastedInput = new FormControl("", Validators.required);
    this.roasterTipsInput = new FormControl("", Validators.required);
    this.strengthLevelInput = new FormControl(0, Validators.required);
    this.contributedByInput = new FormControl("", Validators.required);  

    this.coffeeForm = new FormGroup({
      name: this.nameInput,
      tagline: this.taglineInput,
      description: this.descriptionInput,
      first_roasted: this.firstRoastedInput,
      roaster_tips: this.roasterTipsInput,
      strength_level: this.strengthLevelInput,
      contributed_by: this.contributedByInput
    })

  }


  onSubmit() {

    const newCoffeeData = this.coffeeForm.value;
    this.coffeeService.createCoffee(newCoffeeData).subscribe({
      next: (response) => {
        this.openSuccess()
        console.log('New coffee added:', response);
       },
      error: (error) => {
        this.openError()
        console.error('Error adding coffee:', error);
      }
    });

    this.coffeeForm.reset()

  }


  openSuccess() {
    this.toast.success({detail:"Success", summary:'New coffee added', duration:5000, position:'topRight'});
  }

  openError() {
    this.toast.success({detail:"Error", summary:'Failed to add new coffee', duration:5000, position:'topRight'});
  }

}
