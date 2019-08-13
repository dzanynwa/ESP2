import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelsComponent} from './channels/channels.component'
import { RetailComponent } from './retail/retail.component';
import { MerchantsComponent } from './merchants/merchants.component';
import { LoginComponent } from './login/login.component';
import { MerchantsTableComponent } from './merchants-table/merchants-table.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent},
  { path: 'channels', component: ChannelsComponent },
  { path: 'retail', component: RetailComponent },
  { path: 'merchants', component: MerchantsComponent},
  { path: 'merchantsTable', component: MerchantsTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
