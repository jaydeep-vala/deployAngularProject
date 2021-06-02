import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateComponent } from './update/update.component';
import { UserListComponent } from './user-list/user-list.component';
import { AListComponent } from './a-list/a-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// 
// import { } from 'ngx'

@NgModule({
  declarations: [AdminComponent, LoginComponent, RegisterComponent, HeaderComponent, FooterComponent, UpdateComponent, UserListComponent, AListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,

  ],exports :[
    AdminComponent, 
    LoginComponent, 
    RegisterComponent
  ]
})
export class AdminModule { }
