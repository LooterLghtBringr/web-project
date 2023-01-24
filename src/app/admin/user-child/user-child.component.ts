import {Component, Input} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-child',
  templateUrl: './user-child.component.html',
  styleUrls: ['./user-child.component.scss']
})
export class UserChildComponent {

  @Input() user: User | undefined;
}
