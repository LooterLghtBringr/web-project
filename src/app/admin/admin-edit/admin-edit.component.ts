import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AdminService} from '../service/admin.service';
import {User} from '../user';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  idControl = new FormControl<number>(0, {nonNullable: true});
  userNameControl = new FormControl<string>('', {nonNullable: true});
  passwordControl = new FormControl<string>('', {nonNullable: true});

  editForm = this.fb.nonNullable.group({
    id: this.idControl,
    userName: this.userNameControl,
    password: this.passwordControl
  }, {
    updateOn: 'change'
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router) {
  }

  ngOnInit(): void {

    let id = 0;

    this.route.paramMap.subscribe(
      params => {
        id = +(params.get('id') || 0);
        this.editForm.patchValue({
            id: id
          }
        )
      }
    );

    if (id != 0) {
      this.updateForm(id);
    }
  }

  save(): void {
    let userExists = true;
    const user: User = {
      id: this.editForm.controls.id.getRawValue(),
      userName: this.editForm.controls.userName.getRawValue(),
      password: this.editForm.controls.password.getRawValue()
    }
    this.adminService.checkUserExists(user.id).subscribe(value => userExists = value)

    if (!userExists) {
      this.adminService.changeUser(user).subscribe();
      this.updateForm(user.id);
    } else {
      this.adminService.saveUser(user).subscribe();
      this.router.navigate(['../' + user.id], {relativeTo: this.route});
    }

  }

  updateForm(id: number): void {
    this.adminService.getUser(id).subscribe(
      user => this.editForm.patchValue({
        userName: user.userName,
        password: user.password
      }));
  }

}
