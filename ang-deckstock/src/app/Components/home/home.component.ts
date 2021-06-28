import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Advert } from '../../Models/advert';
import { AdvertHttpService } from '../../Services/Api/advert-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private advertHttpService: AdvertHttpService) { }

  advertList: Advert[];
  advertListActif: Advert[];
  actualBrand = '';
  actualModel = '';
  actualWidth = '';
  actualConcave = '';
  actualShape = '';
  filterisActivated = false;
  // banner
  localisation = 'home';
  // pagination
  currentPage = 1;
  pageSize = 8;


  ngOnInit(): void {

    this.advertHttpService.getAll().subscribe(
      data => {
        this.advertList = data['hydra:member'];
        this.advertListActif = this.advertList;
      }
    );

  }

    getSelectedBrand(value: string): any{
       // this.advertListActif = this.advertList;
       // this.advertListActif = this.advertListActif.filter(data => data.model['brand']['name'] === value);
       // return this.actualBrand = value;

       this.actualBrand = value;
       this.actualModel = '';
       this.filterAll(this.actualBrand, this.actualModel, this.actualWidth, this.actualConcave, this.actualShape);
       return this.actualBrand;
    }
    getSelectedModel(value: string): any{
       // this.getSelectedBrand(this.actualBrand);
       // this.advertListActif = this.advertListActif.filter(data => data.model['name'] === value);
        // return this.actualModel = value;
        this.actualModel = value;
        this.filterAll(this.actualBrand, this.actualModel, this.actualWidth, this.actualConcave, this.actualShape);
        return this.actualModel;
    }

    getSelectedWidth(value: string): any{
       this.actualWidth = value;
       this.filterAll(this.actualBrand, this.actualModel, this.actualWidth, this.actualConcave, this.actualShape);
       return this.actualWidth;
    }

    getSelectedConcave(value: string): any{
      this.actualConcave = value;
      this.filterAll(this.actualBrand, this.actualModel, this.actualWidth, this.actualConcave, this.actualShape);
      return this.actualConcave;
    }

    getSelectedShape(value: string): any{
      this.actualShape = value;
      this.filterAll(this.actualBrand, this.actualModel, this.actualWidth, this.actualConcave, this.actualShape);
      return this.actualShape;
    }

    filterAll(brand, model, width, concave, shape): any{
      this.advertListActif = this.advertList
        .filter(
            data =>
              (brand !== '' ? data.model['brand']['name'] === brand : data.model['brand']['name'] != null) &&
              (model !== '' ? data.model['name'] === model : data.model['name'] != null) &&
              (width !== '' ? data.width === width : data.width != null) &&
              (concave !== '' ? data.concave === concave : data.concave != null) &&
              (shape !== '' ? data.shape === shape : data.shape != null)
        );
      this.currentPage = 1;
    }

    resetAllFilter(value): void{
      console.log(value);
      if (value === 'reset'){
        this.advertListActif = this.advertList;
        this.actualBrand = '';
        this.actualModel = '';
        this.actualWidth = '';
        this.actualConcave = '';
        this.actualShape = '';
      }
      this.currentPage = 1;
    }


}

