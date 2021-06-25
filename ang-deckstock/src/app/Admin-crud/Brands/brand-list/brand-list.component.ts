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

  // collapse from ng-bootstrap
  public isCollapsed = true;


  ngOnInit(): void {

    this.brandHttpService.getAll()
      .pipe(first())
      .subscribe(data => this.brandList = data['hydra:member']);
  }

  deleteBrand(id: string): any {
        const brand = this.brandList.find(x => x.id === Number(id));
        if (!brand) { return; }
        this.brandHttpService.deleteOne(Number(id))
            .pipe(first())
            .subscribe(() => this.brandList = this.brandList.filter(x => x.id !== Number(id)));
    }

}
