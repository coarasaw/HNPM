import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuGralComponent } from './menu-gral/menu-gral.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { GithubComponent } from './github/github.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';


@NgModule({
  declarations: [
    MenuGralComponent,
    SpinnerComponent,
    GithubComponent,
    MenuInicioComponent
  ],
  exports:[
    MenuGralComponent,
    GithubComponent,
    MenuInicioComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
