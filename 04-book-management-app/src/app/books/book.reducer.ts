import { createReducer, on } from "@ngrx/store";
import { Book } from "../model/book";
import { AddBook, AddBookFailure, AddBookSuccess, RemoveBook } from "./book.actions";


/**
 * Reducers are pure functions that take the current state and an action as arguments, modify the current state and return a new state.
 * The createReducer function from ngrx is used to create the reducer function. It takes the initial state and a list of on 
 * functions as parameters.
 * on function is used to define how the state should be modified for each specified action.
 */

export const initialState: Book[] = [];

export const BookReducer = createReducer(
    initialState,
    // When AddBook action is dispatched, it should not update the state. Internally the service should be called which would then
    // run the backend to make changes to DB and based on DB response of either success or failure,
    // AddBookSuccess or AddBookFailure action should be dispatched.
    on(AddBook, (state) => {return state;}),
    on(AddBookSuccess, (state, {id, title, author}) => [...state, {id, title, author}]),
    on(AddBookFailure, (state, {error}) => {
        console.error("Add book failed:", error);
        return state;
    }),
    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
);