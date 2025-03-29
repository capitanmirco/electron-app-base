import {Routes} from '@angular/router';
import {DashboardComponent} from './features/dashboard/dashboard/dashboard.component';
import {TransactionsComponent} from './features/transactions/transactions/transactions.component';
import {ReportsComponent} from './features/reports/reports/reports.component';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'reports', component: ReportsComponent}
];
