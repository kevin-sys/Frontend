import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConsultarclienteComponent } from './Cliente/consultarcliente/consultarcliente.component';
import { RegistrarclienteComponent } from './Cliente/registrarcliente/registrarcliente.component';
import { EditarclienteComponent } from './Cliente/editarcliente/editarcliente.component';

import{FormsModule}from'@angular/forms';
import{HttpClientModule}from'@angular/common/http';

import { ClienteserviceService } from './Service/clienteservice.service';
import { ProductoserviceService } from './Service/productoservice.service';

import { ConsultarproductoComponent } from './Producto/consultarproducto/consultarproducto.component';
import { RegistrarproductoComponent } from './Producto/registrarproducto/registrarproducto.component';
import { EditarproductoComponent } from './Producto/editarproducto/editarproducto.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultarclienteComponent,
    RegistrarclienteComponent,
    EditarclienteComponent,
    ConsultarproductoComponent,
    RegistrarproductoComponent,
    EditarproductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteserviceService, ProductoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
