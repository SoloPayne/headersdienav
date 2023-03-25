import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
{  path: '', redirectTo: 'dashboard', pathMatch: 'full'
},

{  path: 'dashboard',
  component: BodyComponent
},

{  path: 'product',
  component: ProductCatalogComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
