import { Component, OnInit, Output } from '@angular/core';
import { Brand } from '../../Models/brand';
import { Model } from '../../Models/model';
import { ModelHttpService } from '../../Services/Api/model-http.service';
import { BrandHttpService } from '../../Services/Api/brand-http.service';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(
      private modelHttpService: ModelHttpService,
      private brandHttpService: BrandHttpService
    ) { }

  brands: Brand[];
  models: Model[];
  filterisActivated = false;
  @Output() myBrand: EventEmitter<string> = new EventEmitter();
  @Output() myModel: EventEmitter<string> = new EventEmitter();
  @Output() myWidth: EventEmitter<string> = new EventEmitter();
  @Output() myConcave: EventEmitter<string> = new EventEmitter();
  @Output() myShape: EventEmitter<string> = new EventEmitter();
  @Output() resetFilter: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {

    // get all brand
    this.brandHttpService.getAll()
      .subscribe(
        data => this.brands = data['hydra:member']
      );

  }

  emitBrand(value): void {
    if (value !== 'Marque'){
      this.myBrand.emit(value);
      // get all models
      this.modelHttpService.getAll()
      .subscribe(
        data => this.models = data['hydra:member']
        .filter(
          item => item.brand.name === value
        )
      );
      this.filterisActivated = true;
    }
  }

  emitModel(value): void {
    if (value !== 'Modele'){
      this.myModel.emit(value);
      this.filterisActivated = true;
    }
  }

  emitWidth(value): void {
    if (value !== 'Largeur'){
      this.myWidth.emit(value);
      this.filterisActivated = true;
    }
  }

  emitConcave(value): void {
    if (value !== 'Concave'){
      this.myConcave.emit(value);
      this.filterisActivated = true;
    }
  }

  emitShape(value): void {
    if (value !== 'Shape'){
      this.myShape.emit(value);
      this.filterisActivated = true;
    }
  }

  initAdverts(): void {
    this.filterisActivated = false;
    (document.getElementById('filter') as HTMLFormElement).reset();
    this.resetFilter.emit('reset');
  }

}
