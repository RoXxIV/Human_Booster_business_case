import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './Admin-crud/Brands/brand-list/brand-list.component';
import { AddBrandComponent } from './Admin-crud/Brands/add-brand/add-brand.component';
import { AddModelComponent } from './Admin-crud/Collections/add-model/add-model.component';
import { ModelListComponent } from './Admin-crud/Collections/model-list/model-list.component';
import { AddSkateshopComponent } from './Admin-crud/Skateshops/add-skateshop/add-skateshop.component';
import { SkateshopListComponent } from './Admin-crud/Skateshops/skateshop-list/skateshop-list.component';
import { AdvertListComponent } from './Admin-crud/Adverts/advert-list/advert-list.component';
import { AddAdvertComponent } from './Admin-crud/Adverts/add-advert/add-advert.component';
import { AdminInterfaceComponent } from './Admin-crud/admin-interface/admin-interface.component';
import { HomeComponent } from './Components/home/home.component';
import { ArticleDetailsComponent } from './Components/article-details/article-details.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},

  { path: 'admin', component: AdminInterfaceComponent},

  { path: 'brands', component: BrandListComponent},
  { path: 'add-brand', component: AddBrandComponent },
  { path: 'edit-brand/:id', component: AddBrandComponent },

  { path: 'models', component: ModelListComponent},
  { path: 'add-model', component: AddModelComponent },
  { path: 'edit-model/:id', component: AddModelComponent },

  { path: 'skateshops', component: SkateshopListComponent},
  { path: 'add-skateshop', component: AddSkateshopComponent },
  { path: 'edit-skateshop/:id', component: AddSkateshopComponent },

  { path: 'adverts', component: AdvertListComponent},
  { path: 'add-advert', component: AddAdvertComponent },
  { path: 'edit-advert/:id', component: AddAdvertComponent },

  { path: 'article/:id', component: ArticleDetailsComponent},

 // {path: '**', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
