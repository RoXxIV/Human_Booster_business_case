import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './Admin-crud/Brands/brand-list/brand-list.component';
import { AddBrandComponent } from './Admin-crud/Brands/add-brand/add-brand.component';
import { AddModelComponent } from './Admin-crud/Collections/add-model/add-model.component';
import { ModelListComponent } from './Admin-crud/Collections/model-list/model-list.component';
import { AddSkateshopComponent } from './Admin-crud/Skateshops/add-skateshop/add-skateshop.component';
import { SkateshopListComponent } from './Admin-crud/Skateshops/skateshop-list/skateshop-list.component';

const routes: Routes = [

  { path: 'brands', component: BrandListComponent},
  { path: 'add-brand', component: AddBrandComponent },
  { path: 'edit-brand/:id', component: AddBrandComponent },

  { path: 'models', component: ModelListComponent},
  { path: 'add-model', component: AddModelComponent },
  { path: 'edit-model/:id', component: AddModelComponent },

  { path: 'skateshops', component: SkateshopListComponent},
  { path: 'add-skateshop', component: AddSkateshopComponent },
  { path: 'edit-skateshop/:id', component: AddSkateshopComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
