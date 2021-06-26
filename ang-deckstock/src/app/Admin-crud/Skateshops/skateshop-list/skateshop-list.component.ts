import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { SkateshopHttpService } from 'src/app/Services/Api/skateshop-http.service';
import { Skateshop } from '../../../Models/skateshop';

@Component({
  selector: 'app-skateshop-list',
  templateUrl: './skateshop-list.component.html',
  styleUrls: ['./skateshop-list.component.scss']
})
export class SkateshopListComponent implements OnInit {

  constructor(private skateshopHttpService: SkateshopHttpService) { }

  skateshopList!: Skateshop[];

  // pagination
  currentPage = 1;
  pageSize = 10;
  collectionSize: number;

  ngOnInit(): void {
    // get all brands
    this.skateshopHttpService.getAll()
      .pipe(first())
      .subscribe(
        data => this.skateshopList = data['hydra:member'],
        item => this.collectionSize = item['hydra:totalItems']
        );
  }

  deleteSkateshop(id: string): any {
        const skateshop = this.skateshopList.find(x => x.id === Number(id));
        if (!skateshop) { return; }
        this.skateshopHttpService.deleteOne(Number(id))
            .pipe(first())
            .subscribe(() => this.skateshopList = this.skateshopList.filter(x => x.id !== Number(id)));
    }

}
