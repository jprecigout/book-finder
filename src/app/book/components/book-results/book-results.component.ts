import {Book} from '../../book.model';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-book-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './book-results.component.html',
  styleUrls: ['./book-results.component.css']
})
export class BookResultsComponent {

  @Input()
  books: Book[];

  constructor() { }

}
