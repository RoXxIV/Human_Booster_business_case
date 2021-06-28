import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandListComponent } from './Admin-crud/Brands/brand-list/brand-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddBrandComponent } from './Admin-crud/Brands/add-brand/add-brand.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AddModelComponent } from './Admin-crud/Collections/add-model/add-model.component';
import { ModelListComponent } from './Admin-crud/Collections/model-list/model-list.component';
import { AdminNavComponent } from './Admin-crud/admin-nav/admin-nav.component';
import { SkateshopListComponent } from './Admin-crud/Skateshops/skateshop-list/skateshop-list.component';
import { AddSkateshopComponent } from './Admin-crud/Skateshops/add-skateshop/add-skateshop.component';
import { AdvertListComponent } from './Admin-crud/Adverts/advert-list/advert-list.component';
import { AddAdvertComponent } from './Admin-crud/Adverts/add-advert/add-advert.component';
import { AdminInterfaceComponent } from './Admin-crud/admin-interface/admin-interface.component';
import { BackHomeComponent } from './Components/back-home/back-home.component';
import { HomeComponent } from './Components/home/home.component';
import { BanniereComponent } from './Components/banniere/banniere.component';
import { ArticleCardComponent } from './Components/article-card/article-card.component';
import { FilterComponent } from './Components/filter/filter.component';
import { ArticleDetailsComponent } from './Components/article-details/article-details.component';
import { LoginComponent } from './Components/login/login.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './Guards/auth-guard.service';
import { AuthAdminGuardService } from './Guards/auth-admin-guard.service';

export function getToken(): any {
  return localStorage.getItem('auth-token');
}

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    AddBrandComponent,
    HeaderComponent,
    FooterComponent,
    AddModelComponent,
    ModelListComponent,
    AdminNavComponent,
    SkateshopListComponent,
    AddSkateshopComponent,
    AdvertListComponent,
    AddAdvertComponent,
    AdminInterfaceComponent,
    BackHomeComponent,
    HomeComponent,
    BanniereComponent,
    ArticleCardComponent,
    FilterComponent,
    ArticleDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    JwtModule.forRoot( {config: {
        tokenGetter: getToken
      }}),
  ],
  providers: [
    AuthGuardService,
    AuthAdminGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
