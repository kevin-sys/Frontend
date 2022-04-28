import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Modelo/Cliente';
import{ClienteserviceService}from'../../Service/clienteservice.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-consultarcliente',
  templateUrl: './consultarcliente.component.html',
  styleUrls: ['./consultarcliente.component.css']
})
export class ConsultarclienteComponent implements OnInit {

  clientes!:Cliente[];
  constructor(private clienteservice:ClienteserviceService, private router:Router) { }

  ngOnInit(): void {
    this.clienteservice.GetClientes()
    .subscribe(data=>{
      this.clientes=data;
    })
  }
  PostClientes(cliente:Cliente):void{
    localStorage.setItem("id",cliente.id.toString());
    this.router.navigate(["editarcliente"]);
  }
  DeleteCliente(cliente:Cliente){
    this.clienteservice.DeleteCliente(cliente)
    .subscribe(data=>{
      this.clientes=this.clientes.filter(p=>p!==cliente);
      alert("CLIENTE ELIMINADO SATISFACTORIAMENTE");
    })
  }
}
