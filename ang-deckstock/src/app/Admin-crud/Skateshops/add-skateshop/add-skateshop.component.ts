import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/Models/user';
import { SkateshopHttpService } from 'src/app/Services/Api/skateshop-http.service';
import { UserHttpService } from 'src/app/Services/Api/user-http.service';


@Component({
  selector: 'app-add-skateshop',
  templateUrl: './add-skateshop.component.html',
  styleUrls: ['./add-skateshop.component.scss']
})
export class AddSkateshopComponent implements OnInit {

  constructor(
      private fb: FormBuilder,
      private skateshopHttpService: SkateshopHttpService,
      private userHttpService: UserHttpService,
      private route: ActivatedRoute,
      private router: Router
      ) { }

  skateshopForm: FormGroup;
  users: User[];
  id!: string;
  isAddMode!: boolean;
  submitted = false;

  ngOnInit(): void {

    this.userHttpService.getAll()
    .subscribe(
      m => this.users = m['hydra:member']
      );

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.skateshopForm = this.fb.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      professional: this.fb.group(
        {id: 1}
      )
    });

    if (!this.isAddMode) {
            this.skateshopHttpService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.skateshopForm.patchValue(x));
        }
  }

  onSubmit(): void {
        this.submitted = true;

        if (this.skateshopForm.valid) {
            if (this.isAddMode) {
            this.createBrand();
          } else {
            this.updateBrand();
          }
        }
    }

     createBrand(): void {
        this.skateshopHttpService.create(this.skateshopForm.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigateByUrl('/skateshops');
            });
    }

    updateBrand(): void {
        this.skateshopHttpService.update(this.id, this.skateshopForm.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigateByUrl('/skateshops');
            });
    }

}
