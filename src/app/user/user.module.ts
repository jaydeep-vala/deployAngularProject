import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http"
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileComponent } from './profile/profile.component';
import { WheatherWidgetMainComponent } from './wheather-widget-main/wheather-widget-main.component';
import { FromEventComponent } from './from-event/from-event.component';
import { RxjsOperatorComponent } from './rxjs-operator/rxjs-operator.component';
import { RetryComponent } from './retry/retry.component';
import { DebouceTimeDUCComponent } from './debouce-time-duc/debouce-time-duc.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { SearchFuncnaComponent } from './search-funcna/search-funcna.component';




@NgModule({
  declarations: [UserComponent, 
    UserRegisterComponent, 
    UserLoginComponent, 
    UserHeaderComponent, 
    UserListComponent, 
    ProfileComponent, 
    WheatherWidgetMainComponent, 
    FromEventComponent, 
    RxjsOperatorComponent, 
    RetryComponent, 
    DebouceTimeDUCComponent, SwitchMapComponent, SearchFuncnaComponent ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingBarRouterModule,
  ]
})
export class UserModule { }
