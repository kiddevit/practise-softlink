import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AuthenticationComponent }   from './authentication.component';

export const appRoutes: Routes = [
    { path: '', component: AuthenticationComponent}
];

@NgModule({
imports: [ FormsModule, CommonModule, RouterModule.forChild(appRoutes) ],
    declarations: [ AuthenticationComponent ],
})
export class UserModule {}