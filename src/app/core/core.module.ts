import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JobSearchBoxComponent } from './job-search-input/job-search-box.component'
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule
    ],
    declarations: [
        LoginComponent,
        HeaderComponent,
        HomeComponent,
        JobSearchBoxComponent
      ],
    exports: [
        RouterModule,
        HeaderComponent,
        LoginComponent
    ],
    providers: [

    ]
})
export class CoreModule { }
