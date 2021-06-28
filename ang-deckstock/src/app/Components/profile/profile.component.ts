import { Component, OnInit } from '@angular/core';
import { UserHttpService } from '../../Services/Api/user-http.service';
import { AdvertHttpService } from '../../Services/Api/advert-http.service';
import { Advert } from '../../Models/advert';
import { SkateshopHttpService } from '../../Services/Api/skateshop-http.service';
import { User } from '../../Models/user';
import { TokenStorageService } from '../../Services/Authentication/token-storage.service';
const USER_KEY = 'auth-user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private advertHttpService: AdvertHttpService,
    private skateshopHttpService: SkateshopHttpService,
    private userHttpService: UserHttpService,
    private token: TokenStorageService
    ) { }

  advertList!: Advert[];
  skateshopList!: Advert[];
  user!: User;
  idUser = 3;
  ngOnInit(): void {

    // get the user actual user id
    const user = JSON.parse(window.sessionStorage.getItem(USER_KEY));

    this.advertHttpService.getAll().subscribe(
      data => this.advertList = data['hydra:member']
        .filter(advert => advert['skateshop']['professional']['id'] == user.id)
    );

    this.skateshopHttpService.getAll().subscribe(
      data => this.skateshopList = data['hydra:member']
        .filter(skateshop => skateshop['professional']['id'] == user.id)
    );

    this.userHttpService.getById(user.id).subscribe(
      data => this.user = data
    );
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }

}
