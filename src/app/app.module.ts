import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdUserComponent } from './ad-user/ad-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"
import { RegisterComponent } from './admin/register/register.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './user/auth.guard';
import { VServicesService } from './v-services.service';
import { RefreshGuard } from './refresh.guard';
import { SearchService } from './search-service/search.service';


@NgModule({
  declarations: [
    AppComponent,
    AdUserComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,UserModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true

  },AuthGuard,VServicesService,RefreshGuard,SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
