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
import { AuthenticationApiService } from './services/auth-api.service';
import { JobSearchService } from './services/core.service';
import { AuthenticationService } from './services/auth.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatListModule,
        MatExpansionModule,
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
        JobSearchApiService,
        JobSearchService,
        AuthenticationApiService,
        AuthenticationService
    ]
})
export class CoreModule { }
