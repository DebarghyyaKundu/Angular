import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl: string = "http://localhost:3001"
  private reservations: Reservation[] = [];

  constructor(private httpClient: HttpClient) {}

  //CRUD Operations

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.baseUrl}/reservations`);
  }

  getReservationById(id: string): Observable<Reservation> {
    return this.httpClient.get<Reservation>(`${this.baseUrl}/reservation/${id}`);
  }

  addReservation(reservation: Reservation): Observable<void> {
    return this.httpClient.post<void>(`${this.baseUrl}/reservation`, reservation);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/reservation/${id}`, updatedReservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/reservation/${id}`);
  }
}
