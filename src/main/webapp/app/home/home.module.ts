import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RfbappSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [RfbappSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class RfbappHomeModule {}
