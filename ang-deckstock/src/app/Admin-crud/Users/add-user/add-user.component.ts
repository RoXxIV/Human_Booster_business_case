import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserHttpService } from '../../../Services/Api/user-http.service';
import { AuthService } from '../../../Services/Authentication/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
      private fb: FormBuilder,
      private userHttpService: UserHttpService,
      private authService: AuthService,
      private route: ActivatedRoute,
      private router: Router) { }

      userForm: FormGroup;
      id!: string;
      isAddMode!: boolean;
      submitted = false;

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      siretNumber: ['', Validators.required],
      phone: ['', Validators.required],
    });

    if (!this.isAddMode) {
            this.userHttpService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.userForm.patchValue(x));
        }

  }

  onSubmit(): void {
        this.submitted = true;

        if (this.userForm.valid) {
            if (this.isAddMode) {
            this.createUser();
          } else {
            this.updateUser();
          }
        }
    }

    createUser(): void {
        this.authService.create(this.userForm.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigateByUrl('/users');
            });
    }

    updateUser(): void {
        this.userHttpService.update(this.id, this.userForm.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigateByUrl('/users');
            });
    }

}
