import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MesasComponent } from './mesas/mesas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'mesas', component: MesasComponent },
    { path: 'clientes', component: ClientesComponent },
    { path: 'reportes', component: ReportesComponent },
    { path: 'configuracion', component: ConfiguracionComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
