import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { RfbappSharedModule } from 'app/shared/shared.module';
import { RfbappCoreModule } from 'app/core/core.module';
import { RfbappAppRoutingModule } from './app-routing.module';
import { RfbappHomeModule } from './home/home.module';
import { RfbappEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    RfbappSharedModule,
    RfbappCoreModule,
    RfbappHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    RfbappEntityModule,
    RfbappAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class RfbappAppModule {}
