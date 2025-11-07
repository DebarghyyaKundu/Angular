import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../model/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  // Initialize FormBuilder using Dependency Injection when the instance of this component is created, even before ngOnInit (app initialization) is called
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  // Add validation to the form elements on app initialization, hence added on ngOnInit
  // The key names of the formBuilder.group has to exactly match the formControlName in the HTML template so that Angular can link them
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    
    // Check if id is present as url parameter in edit route. If present, fetch reservation details by id.
    if(id) {
      let reservation = this.reservationService.getReservationById(id);
      if(reservation) {
        // Populate the reservation form with existing reservation details by id
        this.reservationForm.patchValue(reservation);
      }
    }
  }

  onSubmit(): void {
    if(this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');
    
      // Check if id is present as url parameter in edit route. If present, fetch reservation details by id.
      if(id) {
        // Update
        this.reservationService.updateReservation(id, reservation);
      }
      else {
        // Add
        this.reservationService.addReservation(reservation);
      }

      // Navigate to the reservation list view after successful submission
      this.router.navigate(['/list']);
    }
  }

}
