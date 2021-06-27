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
  actualBrand: string;
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
        this.advertListActif = this.advertList;
        this.advertListActif = this.advertListActif.filter(data => data.model['brand']['name'] === value);
        return this.actualBrand = value;
    }
    getSelectedModel(value: string): any{
        this.getSelectedBrand(this.actualBrand);
        this.advertListActif = this.advertListActif.filter(data => data.model['name'] === value);
    }

    getSelectedWidth(value: string): any{
      console.log(value);
      this.advertListActif = this.advertListActif.filter(data => data.width === value);
    }


}
