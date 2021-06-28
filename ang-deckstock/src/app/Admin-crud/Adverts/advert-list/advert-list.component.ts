import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AdvertHttpService } from 'src/app/Services/Api/advert-http.service';
import { Advert } from '../../../Models/advert';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.scss']
})
export class AdvertListComponent implements OnInit {

  constructor(private advertHttpService: AdvertHttpService) { }

  advertList!: Advert[];
  // pagination
  currentPage = 1;
  pageSize = 10;
  collectionSize: number;

  ngOnInit(): void {

    // get all Advert
    this.advertHttpService.getAll()
      .pipe(first())
      .subscribe(
        data => this.advertList = data['hydra:member'],
        item => this.collectionSize = item['hydra:totalItems']
        );
  }
  deleteAdvert(id: string): any {
        const model = this.advertList.find(x => x.id === Number(id));
        if (!model) { return; }
        this.advertHttpService.deleteOne(Number(id))
            .pipe(first())
            .subscribe(() => this.advertList = this.advertList.filter(x => x.id !== Number(id)));
    }

}
