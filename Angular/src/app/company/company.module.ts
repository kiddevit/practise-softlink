import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { CompanyListComponent }   from './company-list.component';
import { CompanyCreateComponent }   from './company-create.component';
import { CompanyDetailComponent }   from './company-detail.component';
import { CompanyEditComponent }   from './company-edit.component';


export const appRoutes: Routes = [
{ path: '', component: CompanyListComponent },
{ path: 'create', component: CompanyCreateComponent },
{ path: 'detail', component: CompanyDetailComponent },
{ path: 'edit', component: CompanyEditComponent },
];

@NgModule({
    imports: [ FormsModule, CommonModule, RouterModule.forChild(appRoutes) ],
    declarations: [  CompanyListComponent, CompanyCreateComponent, CompanyDetailComponent, CompanyEditComponent ],
})
export class CompanyModule {}