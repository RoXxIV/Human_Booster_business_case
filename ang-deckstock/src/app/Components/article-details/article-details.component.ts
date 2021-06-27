import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Advert } from '../../Models/advert';
import { AdvertHttpService } from '../../Services/Api/advert-http.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private advertHttpService: AdvertHttpService,
      private modalService: NgbModal
      ) { }

  articleDetail: Advert;
  closeResult = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.advertHttpService.getById(Number(id)).subscribe(
      advert => this.articleDetail = advert,
      error => {
          console.log(error);
        });
  }

  /*----------Modal---------- */
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
