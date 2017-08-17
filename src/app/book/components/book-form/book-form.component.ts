import { FormArray } from '@angular/forms/src/model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-book-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Input()
  types: String[];

  @Output()
  search = new EventEmitter<FormGroup>();

  form = this.fb.group({
    filter: [''],
    filterTypes: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  get control() {
    return this.form.get('filterTypes') as FormArray;
  }

  selectType(type: String) {
    let index = this.control.value.indexOf(type);

    (index >= 0) ? this.control.removeAt(index) : this.control.push(new FormControl(type));
    
  }

  onSubmit() {
    if (this.form.invalid) { return; }
    this.search.emit(this.form.value);
  }

}
