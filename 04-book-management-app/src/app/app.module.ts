import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { AppState } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './books/books.effects';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Using this we ask our application to register the StoreModule and use BookReducer to manage the state named 'book'.
    StoreModule.forRoot<AppState>({book: BookReducer}),
    EffectsModule.forRoot([BookEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
