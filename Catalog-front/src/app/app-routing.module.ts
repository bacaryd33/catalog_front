import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductswallComponent } from './productswall/productswall.component';

const routes: Routes = [
  { path:'store', component: ProductswallComponent},
  { path:'store/:libelle', component: ProductswallComponent},
  { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
