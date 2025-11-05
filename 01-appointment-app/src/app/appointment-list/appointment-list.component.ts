import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  // Life cycle hook which triggers on app initialization
  ngOnInit(): void {
    const storedAppointments = localStorage.getItem("appointments");
    this.appointments = storedAppointments ? JSON.parse(storedAppointments) : [];
  }

  addAppointment(): void {
    if (this.newAppointmentTitle.trim() && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointments.push(newAppointment);

      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(index: number): void {
    this.appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }
}
