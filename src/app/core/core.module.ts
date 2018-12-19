import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JobSearchBoxComponent } from './job-search-input/job-search-box.component'
import { RouterModule } from '@angular/router';

import { JobSearchApiService } from './services/core-api.service';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        FormsModule
    ],
    declarations: [
        LoginComponent,
        HeaderComponent,
        HomeComponent,
        JobSearchBoxComponent,
      ],
    exports: [
        RouterModule,
        HeaderComponent,
        LoginComponent
    ],
    providers: [
        JobSearchApiService
    ]
})
export class CoreModule { }
