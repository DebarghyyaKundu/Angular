import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  // In case of an empty path, redirect to /products
  {path: "", redirectTo: "/products", pathMatch: "full"},
  {path: "products", component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
