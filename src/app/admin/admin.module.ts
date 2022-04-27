import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PersonaComponent } from './components/persona/persona.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from '../interceptor.interceptor';
import { CoreModule } from '../core/core.module';
import { PrimengModule } from '../primeng/primeng.module'

@NgModule({
  declarations: [
    PersonaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    PrimengModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ]
})
export class AdminModule { }
