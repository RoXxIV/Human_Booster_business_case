import { Component, OnInit } from '@angular/core';
import { ModelHttpService } from 'src/app/Services/Api/model-http.service';
import { Observable } from 'rxjs';
import { Model } from '../../../Models/model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent implements OnInit {

  constructor(private modelHttpService: ModelHttpService) { }

  modelList!: Model[];

  // pagination
  currentPage = 1;
  pageSize = 10;
  collectionSize: number;

  ngOnInit(): void {
    // get all Collections
    this.modelHttpService.getAll()
      .pipe(first())
      .subscribe(
        data => this.modelList = data['hydra:member'],
        item => this.collectionSize = item['hydra:totalItems']
        );
  }

  deleteModel(id: string): any {
        const model = this.modelList.find(x => x.id === Number(id));
        if (!model) { return; }
        this.modelHttpService.deleteOne(Number(id))
            .pipe(first())
            .subscribe(() => this.modelList = this.modelList.filter(x => x.id !== Number(id)));
    }

}
