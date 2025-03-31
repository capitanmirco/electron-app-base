import {Routes} from '@angular/router';
import {DashboardComponent} from './features/dashboard/dashboard/dashboard.component';
import {TransactionsComponent} from './features/transactions/transactions/transactions.component';
import {ReportsComponent} from './features/reports/reports/reports.component';
import {InformazioniComponent} from './features/informazioni/informazioni.component';
import {HomeComponent} from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'informazioni', component: InformazioniComponent }
];
