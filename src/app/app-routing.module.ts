import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarclienteComponent } from './Cliente/consultarcliente/consultarcliente.component';
import { EditarclienteComponent } from './Cliente/editarcliente/editarcliente.component';
import { RegistrarclienteComponent } from './Cliente/registrarcliente/registrarcliente.component';
import { ConsultarproductoComponent } from './Producto/consultarproducto/consultarproducto.component';
import { EditarproductoComponent } from './Producto/editarproducto/editarproducto.component';
import { RegistrarproductoComponent } from './Producto/registrarproducto/registrarproducto.component';

const routes: Routes = [
  {path:'registrarcliente', component: RegistrarclienteComponent},
  {path:'editarcliente', component: EditarclienteComponent},
  {path:'consultarcliente', component: ConsultarclienteComponent},

  {path:'consultarproducto', component: ConsultarproductoComponent},
  {path:'registrarproducto', component: RegistrarproductoComponent},
  {path:'editarproducto', component: EditarproductoComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
