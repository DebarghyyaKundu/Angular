import { Injectable } from "@angular/core";
import * as bookActions from './book.actions';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BookService } from "./book.service";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class BookEffects {

    // This is a NgRx effect that responds to the AddBook action.
    addBook$ = createEffect(() => this.actions$.pipe(
        // Listening for the AddBook action
        ofType(bookActions.AddBook),

        // For each AddBook action, call the bookService to add the book
        // 'mergeMap' is used to handle multiple concurrent 'addBook' calls
        mergeMap((action) => this.bookService.addBook(action)
        .pipe(
            // If the 'addBook' call is successful, dispatch 'AddBookSuccess' action with the book data.
            map((book) => bookActions.AddBookSuccess(book)),

            // If the 'addBook' call fails, dispatch 'AddBookFailure' action with the error.
            catchError((error) => of(bookActions.AddBookFailure({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private bookService: BookService
    ) {}
}