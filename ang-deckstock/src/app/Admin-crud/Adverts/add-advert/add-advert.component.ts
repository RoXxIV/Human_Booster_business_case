import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Model } from '../../../Models/model';
import { Skateshop } from '../../../Models/skateshop';
import { SkateshopHttpService } from '../../../Services/Api/skateshop-http.service';
import { ModelHttpService } from '../../../Services/Api/model-http.service';
import { AdvertHttpService } from '../../../Services/Api/advert-http.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.scss']
})
export class AddAdvertComponent implements OnInit {

  constructor(
      private fb: FormBuilder,
      private advertHttpService: AdvertHttpService,
      private modelHttpService: ModelHttpService,
      private skateshopHttpService: SkateshopHttpService,
      private router: Router,
      private route: ActivatedRoute,
      ) { }

  advertForm: FormGroup;
  models: Model[];
  skateshops: Skateshop[];
  id!: string;
  isAddMode!: boolean;
  submitted = false;

  // default select options
  widths = ['7.5', '7.6', '7.750', '8', '8.125', '8.250', '8.500', '9', '9.5', '10'];
  concaves = ['Leger', 'Moyen', 'Forte'];
  shapes = ['Strandard', 'Shaped', 'Full'];

  ngOnInit(): void {

    this.skateshopHttpService.getAll()
    .subscribe(
      m => this.skateshops = m['hydra:member']
      );

    this.modelHttpService.getAll()
    .subscribe(
      m => this.models = m['hydra:member']
      );

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.advertForm = this.fb.group({
      description: ['', Validators.required],
      width: ['', Validators.required],
      length: ['', Validators.required],
      shape: ['', Validators.required],
      concave: ['', Validators.required],
      picturePath: ['img/planches/', Validators.required],
      price: [],
      model: this.fb.group({
        id: 1
      }),
      skateshop: this.fb.group({
        id: 1
      })
    });

    if (!this.isAddMode) {
            this.skateshopHttpService.getById(this.id)
                .pipe(first())
                .subscribe(x => this.advertForm.patchValue(x));
        }
  }

  onSubmit(): void {
        this.submitted = true;

        if (this.advertForm.valid) {
            if (this.isAddMode) {
            this.createAdvert();
          } else {
            this.updateAdvert();
          }
        }
    }

    createAdvert(): void {
        this.advertHttpService.create(this.advertForm.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigateByUrl('/adverts');
            });
    }

    updateAdvert(): void {
        this.advertHttpService.update(this.id, this.advertForm.value)
            .pipe(first())
            .subscribe(() => {
                this.router.navigateByUrl('/adverts');
            });
    }

}
