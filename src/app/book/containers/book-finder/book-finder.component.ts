import { Component, OnInit } from '@angular/core';
import {BookService} from '../../book.service';
import {Book} from '../../book.model';

@Component({
  selector: 'app-book-finder',
  templateUrl: './book-finder.component.html',
  styleUrls: ['./book-finder.component.css']
})
export class BookFinderComponent  {

  books$ = this.bookService.select<Book[]>('books');
  types$ = this.bookService.select<String[]>('types');

  constructor(
    private bookService: BookService
  ) { }

  search(event: any) {
    let filter = event.filter;
    let filterTypes = event.filterTypes;

    this.bookService.search(filter, filterTypes);
  }

}
