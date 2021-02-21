import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from '../components/payments/payments.component';
import { SolicitationsComponent } from '../components/solicitations/solicitations.component';

const routes: Routes = [
  { path: '', component: SolicitationsComponent },
  { path: 'app-payments', component: PaymentsComponent},
  { path: 'app-solicitations', component: SolicitationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
