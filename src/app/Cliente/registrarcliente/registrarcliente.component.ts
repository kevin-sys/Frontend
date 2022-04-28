import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import{ClienteserviceService}from'../../Service/clienteservice.service'


@Component({
  selector: 'app-registrarcliente',
  templateUrl: './registrarcliente.component.html',
  styleUrls: ['./registrarcliente.component.css']
})
export class RegistrarclienteComponent implements OnInit {

  cliente:Cliente=new Cliente();
  constructor(private router:Router, private clienteservice:ClienteserviceService) { }
  ngOnInit() {
  }
  
  PostClientes(){
    this.clienteservice.PostClientes(this.cliente).subscribe(data=>{
      alert("SE REGISTRÓ EXITOSAMENTE EL CLIENTE: "+ this.cliente.nombres+" "+this.cliente.apellidos);
     this.router.navigate(["consultarcliente"]);
    });
  }
}
