import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandHttpService } from '../../../Services/Api/brand-http.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {

  constructor(
      private fb: FormBuilder,
      private brandHttpService: BrandHttpService,
      private route: ActivatedRoute,
      private router: Router
      ) { }

  brandForm: FormGroup;
  id!: string;
  isAddMode!: boolean;
  submitted = false;

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.brandForm = this.fb.group({
      name: ['', Validators.required],
    });

    if (!this.isAddMode) {
            this.brandHttpService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.brandForm.patchValue(x));
        }
  }

  onSubmit(): void {
        this.submitted = true;

        if (this.brandForm.valid) {
            if (this.isAddMode) {
            this.createBrand();
          } else {
            this.updateBrand();
          }
        }
    }

     createBrand(): void {
        this.brandHttpService.create(this.brandForm.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigateByUrl('/brands');
            });
    }

    updateBrand(): void {
        this.brandHttpService.update(this.id, this.brandForm.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigateByUrl('/brands');
            });
    }

}
