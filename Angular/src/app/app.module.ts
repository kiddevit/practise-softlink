import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {DataService} from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }   from './app.component';
import { NotFoundComponent }   from './not-found.component';


const appRoutes: Routes =[
    { path: '', loadChildren: './user/user.module#UserModule' },
	{ path: 'product', loadChildren: './product/product.module#ProductModule' },
	{ path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' },
	{ path: 'company', loadChildren: './company/company.module#CompanyModule' },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule , HttpClientModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, NotFoundComponent],
	providers: [ DataService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }