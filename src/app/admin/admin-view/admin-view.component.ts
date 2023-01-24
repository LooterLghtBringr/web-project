import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AdminService} from '../service/admin.service';
import {User} from '../user';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent {
  userName = new FormControl('', [Validators.pattern('[a-zA-Z0-9]*')]);

  users : User[] = [];
  constructor(private adminService: AdminService) {
  }

  search() {
    this.adminService.search(this.userName.getRawValue()).subscribe(users => this.users = users);
  }
}
