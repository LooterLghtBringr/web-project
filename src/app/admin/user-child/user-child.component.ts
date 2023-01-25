import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.scss']
})
export class UserChildComponent {

  @Input() user: User | undefined;

  @Input() selected: boolean = false;

  @Output() selectedChange = new EventEmitter();

  toggleSelect(selected: boolean): void {
    this.selected = selected;
    this.selectedChange.emit(selected);
  }
}
