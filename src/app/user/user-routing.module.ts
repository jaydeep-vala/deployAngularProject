import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { UserListComponent } from '../admin/user-list/user-list.component';
import { AuthGuard } from './auth.guard';
import { DebouceTimeDUCComponent } from './debouce-time-duc/debouce-time-duc.component';
import { FromEventComponent } from './from-event/from-event.component';
import { ProfileComponent } from './profile/profile.component';
import { RetryComponent } from './retry/retry.component';
import { RxjsOperatorComponent } from './rxjs-operator/rxjs-operator.component';
import { SearchFuncnaComponent } from './search-funcna/search-funcna.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

import { UserHeaderComponent } from './user-header/user-header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
// import { LoginComponent } from './login/login.component';

// import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';
import { WheatherWidgetMainComponent } from './wheather-widget-main/wheather-widget-main.component';

const routes: Routes = [{path:"register/login",component:UserLoginComponent},
{path:"register",component:UserRegisterComponent},
{path:"register/login/uheader",canActivate:[AuthGuard],component:UserHeaderComponent,children:[
  {
  path:"profile",component:ProfileComponent
  },
  {
  path:"",component:WheatherWidgetMainComponent
  },
  {
  path:"event",component:FromEventComponent
  },
  {
    path:"UserList",component:UserListComponent
  },
  {
    path:'rxjs',component:RxjsOperatorComponent
  },
  {
    path:'retry',component:RetryComponent
  },
  {
    path:'DT&DUC',component:DebouceTimeDUCComponent
  },
  {
    path:"sMap",component:SwitchMapComponent
  },
  {
    path:"Ssfunc",component:SearchFuncnaComponent
  }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
