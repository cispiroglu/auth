import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from '../../users/users.component';
import { UserCreateComponent } from '../../users/user-create/user-create.component';
import { UserUpdateComponent } from '../../users/user-update/user-update.component';
import { UserDetailComponent } from '../../users/user-detail/user-detail.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NotFoundComponent } from '../../errors/not-found/not-found.component';
import { RolesComponent } from '../../roles/roles.component';
import { RoleCreateComponent } from '../../roles/role-create/role-create.component';
import { RoleUpdateComponent } from '../../roles/role-update/role-update.component';

const RoutesConfig: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/create',
    component: UserCreateComponent
  },
  {
    path: 'users/update/:id',
    component: UserUpdateComponent
  },
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'roles/create',
    component: RoleCreateComponent
  },
  {
    path: 'roles/update/:id',
    component: RoleUpdateComponent
  },
  {
    path: 'notfound',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(RoutesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutesComponents = [
  UsersComponent,
  UserDetailComponent,
  UserCreateComponent,
  UserUpdateComponent
];
