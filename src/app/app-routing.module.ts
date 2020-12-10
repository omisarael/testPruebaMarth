import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

const routes: Routes = [
  {path: 'carrousel', component: CarrouselComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'detalle', component: DetalleComponent},
  {path: 'updateProduct', component: UpdateProductComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'carrousel'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
