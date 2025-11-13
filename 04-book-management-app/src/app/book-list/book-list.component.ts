import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AddBook, RemoveBook } from '../books/book.actions';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    // Selecting the books from the store using selector (select function)
    this.books$ = store.pipe(select('book'));
  }

  /**
   * These functions addBook and removeBook will be called from the UI template. When say addBook is called, it
   * dispatches an action to the store with the necessary payload (id, title, author). The store then processes
   * this action using reducers to update the state accordingly.
   */

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({id, title, author}));
  }

  removeBook(bookId: string) {
    this.store.dispatch(RemoveBook({bookId}));
  }

}
