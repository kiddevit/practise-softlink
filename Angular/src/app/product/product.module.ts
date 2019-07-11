import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { ProductListComponent }   from './product-list.component';
import { ProductCreateComponent }   from './product-create.component';
import { ProductDetailComponent }   from './product-detail.component';
import { ProductEditComponent }   from './product-edit.component';


export const appRoutes: Routes = [
    { path: '', component: ProductListComponent},
    { path: 'create', component: ProductCreateComponent },
    { path: 'detail', component: ProductDetailComponent },
    { path: 'edit', component: ProductEditComponent },
];

@NgModule({
imports: [ FormsModule, CommonModule, RouterModule.forChild(appRoutes) ],
    declarations: [ ProductListComponent, ProductCreateComponent, ProductDetailComponent, ProductEditComponent ],
})
export class ProductModule {}