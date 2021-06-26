import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../../../Models/brand';
import { BrandHttpService } from '../../../Services/Api/brand-http.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  constructor(private brandHttpService: BrandHttpService) { }

  brandList!: Brand[];

  // pagination
  currentPage = 1;
  pageSize = 10;
  collectionSize: number;

  ngOnInit(): void {
    // get all brands
    this.brandHttpService.getAll()
      .pipe(first())
      .subscribe(
        data => this.brandList = data['hydra:member'],
        item => this.collectionSize = item['hydra:totalItems']
        );
  }

  deleteBrand(id: string): any {
        const brand = this.brandList.find(x => x.id === Number(id));
        if (!brand) { return; }
        this.brandHttpService.deleteOne(Number(id))
            .pipe(first())
            .subscribe(() => this.brandList = this.brandList.filter(x => x.id !== Number(id)));
    }
}
