import { createAction, props } from "@ngrx/store";
import { Book } from "../model/book";

/**
 * Creating the actions using ngrx createAction method. The first parameter is the action type which can be named in any way.
 * The second parameter is the payload. Using props method from ngrx, to define the payload. The props tells the action what type of
 * data it should expect.
 */ 
 
export const AddBook = createAction('[Book] Add Book', props<Book>());
export const AddBookSuccess = createAction('[Book] Add Book Success', props<Book>());
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{ error: any }>());

export const RemoveBook = createAction('[Book] Remove Book', props<{ bookId: string }>());