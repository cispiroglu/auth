import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './_modules/route/route.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserUpdateComponent } from './users/user-update/user-update.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataService } from './_services/data.service';
import { UsersService } from './users/users.service';
import { HttpModule } from '@angular/http';
import { RolesComponent } from './roles/roles.component';
import { RoleCreateComponent } from './roles/role-create/role-create.component';
import { RoleUpdateComponent } from './roles/role-update/role-update.component';
import { RoleDetailComponent } from './roles/role-detail/role-detail.component';
import { RolesService } from './roles/roles.service';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    UserUpdateComponent,
    UserCreateComponent,
    NotFoundComponent,
    DashboardComponent,
    RolesComponent,
    RoleCreateComponent,
    RoleUpdateComponent,
    RoleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [DataService, UsersService, RolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
