import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {

  @Input()
  parent: FormGroup;

  constructor() { }

}
