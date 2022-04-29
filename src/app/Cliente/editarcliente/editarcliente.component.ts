import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Modelo/Cliente';
import{ClienteserviceService}from'../../Service/clienteservice.service'


@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrls: ['./editarcliente.component.css']
})
export class EditarclienteComponent implements OnInit {

  cliente :Cliente =  new Cliente();

  constructor(private router:Router,private clienteservice:ClienteserviceService) { }


  ngOnInit(): void {
    this.Buscar();
  }

  Buscar(){
    let id=localStorage.getItem("id");
    this.clienteservice.GetClientesId(+id)
    .subscribe(data=>{
      this.cliente=data;
    })

  }

  PutCliente(cliente:Cliente){
    this.clienteservice.PutCliente(cliente)
    .subscribe(data=>{
      this.cliente=data;
      alert("SE ACTUALIZO EL CLIENTE EXITOSAMENTE");
     this.router.navigate(["/consultarcliente"]);
    })
  }

}
