import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {DataService} from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }   from './app.component';
import { AuthenticationComponent }   from './user/authentication.component';
import { NotFoundComponent }   from './not-found.component';

import { CompanyListComponent }   from './company/company-list.component';
import { CompanyCreateComponent }   from './company/company-create.component';
import { CompanyDetailComponent }   from './company/company-detail.component';
import { CompanyEditComponent }   from './company/company-edit.component';

import { EmployeeListComponent }   from './employee/employee-list.component';
import { EmployeeCreateComponent }   from './employee/employee-create.component';
import { EmployeeDetailComponent }   from './employee/employee-detail.component';
import { EmployeeEditComponent }   from './employee/employee-edit.component';

import { ProductListComponent }   from './product/product-list.component';
import { ProductCreateComponent }   from './product/product-create.component';
import { ProductDetailComponent }   from './product/product-detail.component';
import { ProductEditComponent }   from './product/product-edit.component';


const appRoutes: Routes =[
    { path: '', component: AuthenticationComponent},
    { path: 'employee', component: EmployeeListComponent},
	{ path: 'employee/create', component: EmployeeCreateComponent },
	{ path: 'employee/detail', component: EmployeeDetailComponent },
	{ path: 'employee/edit', component: EmployeeEditComponent },
	{ path: 'product', component: ProductListComponent},
    { path: 'product/create', component: ProductCreateComponent },
	{ path: 'product/detail', component: ProductDetailComponent },
	{ path: 'product/edit', component: ProductEditComponent },
	{ path: 'company', component: CompanyListComponent },
	{ path: 'company/create', component: CompanyCreateComponent },
	{ path: 'company/detail', component: CompanyDetailComponent },
	{ path: 'company/edit', component: CompanyEditComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule , HttpClientModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, AuthenticationComponent, CompanyListComponent, CompanyCreateComponent, CompanyDetailComponent, CompanyEditComponent, EmployeeListComponent, EmployeeCreateComponent, EmployeeDetailComponent, EmployeeEditComponent, ProductListComponent, ProductCreateComponent, ProductDetailComponent, ProductEditComponent, NotFoundComponent],
	providers: [ DataService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }