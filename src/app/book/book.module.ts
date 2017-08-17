import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookResultsComponent } from './components/book-results/book-results.component';
import { TypeSelectorComponent } from './components/type-selector/type-selector.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookFinderComponent } from './containers/book-finder/book-finder.component';
import { BookService } from './book.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookSearchComponent,
    BookResultsComponent,
    TypeSelectorComponent,
    BookFormComponent,
    BookFinderComponent
  ],
  providers: [
    BookService
  ],
  exports: [
    BookFinderComponent
  ]
})
export class BookModule { }
