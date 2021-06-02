import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RefreshGuard } from '../refresh.guard';
import { AuthGuard } from '../user/auth.guard';
import { AListComponent } from './a-list/a-list.component';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [{ path: '', component: AdminComponent },
{path:"register/login",component:LoginComponent},
{path:"register", component:RegisterComponent},
{path:"register/login/header",canActivate:[AuthGuard], component:HeaderComponent,
children:[{path:"", component:AListComponent,canDeactivate:[RefreshGuard],children:[
  {path:"update/:id", component:UpdateComponent}
]},
{path:"adminlist", component:UserListComponent},
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
