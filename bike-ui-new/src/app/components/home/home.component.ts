import { Component,OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  models: string[] = [
    'Kinetico SpeedRacer',
    'Kinetico WindChaser',
    'Kinetico Motothriller'
  ];

  bikeForm: FormGroup;
  validMessage: string = "";

  constructor(private bikeService:BikeService) { }

  ngOnInit() {
    this.bikeForm = new FormGroup({
      name:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {

    if(this.bikeForm.valid) {
      this.validMessage = "Your BikeService Registration Form has been Submitted Successfully. Thanks You!!!";
      this.bikeService.createBikeRegistration(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        },
        error => {
          return throwError(error);
//              return console.error(error);
        }
      )
    }

    else {
      this.validMessage = "Please fill out the form before Submitting";
    }

  }

}
