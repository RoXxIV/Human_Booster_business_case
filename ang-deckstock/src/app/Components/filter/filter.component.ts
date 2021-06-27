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

  @Output() myBrand: EventEmitter<string> = new EventEmitter();
  @Output() myModel: EventEmitter<string> = new EventEmitter();
  @Output() myWidth: EventEmitter<string> = new EventEmitter();
  // @Output() myConcave: EventEmitter<string> = new EventEmitter();
  // @Output() myShape: EventEmitter<string> = new EventEmitter();


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
    }
  }

  emitModel(value): void {
    if (value !== 'Modele'){
      this.myModel.emit(value);
    }
  }

  emitWidth(value): void {
    if (value !== 'Largeur'){
      this.myWidth.emit(value);
    }
  }
/*
  emitConcave(value): void {
    if (value !== 'Modele'){
      this.myModel.emit(value);
    }
  }

  emitShape(value): void {
    if (value !== 'Modele'){
      this.myModel.emit(value);
    }
  }
*/
}
