import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { BrandHttpService } from 'src/app/Services/Api/brand-http.service';
import { ModelHttpService } from 'src/app/Services/Api/model-http.service';
import { Brand } from '../../../Models/brand';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent implements OnInit {

  constructor(
      private fb: FormBuilder,
      private modelHttpService: ModelHttpService,
      private brandHttpService: BrandHttpService,
      private route: ActivatedRoute,
      private router: Router
      ) { }

  modelForm: FormGroup;
  brands: Brand[];
  id!: string;
  isAddMode!: boolean;
  submitted = false;

  ngOnInit(): void {

    this.brandHttpService.getAll()
    .subscribe(
      m => this.brands = m['hydra:member']
      );

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.modelForm = this.fb.group({
      name: ['', Validators.required],
      brand: this.fb.group(
        {id: 1}
      )
    });

    if (!this.isAddMode) {
            this.modelHttpService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.modelForm.patchValue(x));
        }
  }

  onSubmit(): void {
        this.submitted = true;

        if (this.modelForm.valid) {
            if (this.isAddMode) {
            this.createModel();
          } else {
            this.updateModel();
          }
        }
    }

     createModel(): void {
        this.modelHttpService.create(this.modelForm.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigateByUrl('/models');
            });
    }

    updateModel(): void {
        this.modelHttpService.update(this.id, this.modelForm.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigateByUrl('/models');
            });
    }

}
