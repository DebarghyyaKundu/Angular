import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  // of function returns an observable of the book passed to it
  addBook(book: Book): Observable<Book> {
    // Add custom logic to connect with backend API or database here
    return of(book);
  }
}
