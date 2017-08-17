import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-type-selector',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.css']
})
export class TypeSelectorComponent {

  @Input()
  types: String[];

  @Input()
  selectedTypes: String[];

  @Input()
  parent: FormGroup;

  @Output()
  select = new EventEmitter<String>();

  constructor() { }

  isActive(type: String) {
    return (this.selectedTypes.indexOf(type) >= 0);
  }

  onSelect(type: String) {
    this.select.emit(type);
  }

}
