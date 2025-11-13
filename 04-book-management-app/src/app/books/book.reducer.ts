import { createReducer, on } from "@ngrx/store";
import { Book } from "../model/book";
import { AddBook, RemoveBook } from "./book.actions";


/**
 * Reducers are pure functions that take the current state and an action as arguments, modify the current state and return a new state.
 * The createReducer function from ngrx is used to create the reducer function. It takes the initial state and a list of on 
 * functions as parameters.
 * on function is used to define how the state should be modified for each specified action.
 */

export const initialState: Book[] = [];

export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state, {id, title, author}) => [...state, {id, title, author}]),
    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
);