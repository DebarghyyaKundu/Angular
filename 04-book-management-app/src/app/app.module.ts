import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Using this we ask our application to register the StoreModule and use BookReducer to manage the state named 'book'.
    StoreModule.forRoot({book: BookReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
