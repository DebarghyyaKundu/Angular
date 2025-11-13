import { Book } from "./model/book";

// This is the global application state interface where the state will be stored
// State value is not going to be updated directly, thus added readonly property
export interface AppState {
    readonly book: Book[];
}
