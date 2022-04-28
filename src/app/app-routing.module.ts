import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarclienteComponent } from './Cliente/consultarcliente/consultarcliente.component';
import { EditarclienteComponent } from './Cliente/editarcliente/editarcliente.component';
import { RegistrarclienteComponent } from './Cliente/registrarcliente/registrarcliente.component';

const routes: Routes = [
  {path:'registrarcliente', component: RegistrarclienteComponent},
  {path:'editarcliente', component: EditarclienteComponent},
  {path:'consultarcliente', component: ConsultarclienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
