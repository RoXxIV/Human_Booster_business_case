import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../../../Models/user';
import { UserHttpService } from '../../../Services/Api/user-http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userHttpService: UserHttpService) { }

  userList!: User[];

  // pagination
  currentPage = 1;
  pageSize = 10;
  collectionSize: number;

  ngOnInit(): void {
    // get all Users
    this.userHttpService.getAll()
      .pipe(first())
      .subscribe(
        data => {this.userList = data['hydra:member']; console.log(data) },
        item => this.collectionSize = item['hydra:totalItems'],

        );
  }

  deleteUser(id: string): any {
        const user = this.userList.find(x => x.id === Number(id));
        if (!user) { return; }
        this.userHttpService.deleteOne(Number(id))
            .pipe(first())
            .subscribe(() => this.userList = this.userList.filter(x => x.id !== Number(id)));
    }

}
