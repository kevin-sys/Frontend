import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  constructor(private router: Router) { }
  RegistrarCliente() {
    this.router.navigate(["registrarcliente"]);
  }
  ConsultarCliente() {
    this.router.navigate(["consultarcliente"]);
  }
  EditarCliente() {
    this.router.navigate(["editarcliente"]);
  }

  RegistrarProducto() {
    this.router.navigate(["registrarproducto"]);
  }
  ConsultarProducto() {
    this.router.navigate(["consultarproducto"]);
  }
  EditarProducto() {
    this.router.navigate(["editarproducto"]);
  }
}
