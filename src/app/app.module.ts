import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutComponent } from './layout/layout.component';


import { BlockViewer } from './layout-admin/components/blockviewer/blockviewer.component';

/**---------- Componentes ------------ */
import { AppMainComponent } from './layout-admin/app.main.component';
import { AppTopBarComponent } from './layout-admin/app.topbar.component';
import { AppFooterComponent } from './layout-admin/app.footer.component';
import { AppConfigComponent } from './layout-admin/app.config.component';
import { AppMenuComponent } from './layout-admin/app.menu.component';
import { AppMenuitemComponent } from './layout-admin/app.menuitem.component';


/** ----- Services -----  */
import { CountryService } from './layout-admin/service/countryservice';
import { CustomerService } from './layout-admin/service/customerservice';
import { EventService } from './layout-admin/service/eventservice';
import { IconService } from './layout-admin/service/iconservice';
import { NodeService } from './layout-admin/service/nodeservice';
import { PhotoService } from './layout-admin/service/photoservice';
import { ProductService } from './layout-admin/service/productservice';
import { MenuService } from './layout-admin/service/app.menu.service';
import { ConfigService } from './layout-admin/service/app.config.service';
import { InterceptorInterceptor } from './interceptor.interceptor';

import { PrimengModule } from './primeng/primeng.module'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LayoutComponent,
    AppMainComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppConfigComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    BlockViewer,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimengModule,
    

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService, MenuService, ConfigService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
