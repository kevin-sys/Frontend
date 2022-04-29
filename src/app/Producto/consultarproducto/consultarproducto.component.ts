import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelo/Producto';
import{ProductoserviceService}from'../../Service/productoservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultarproducto',
  templateUrl: './consultarproducto.component.html',
  styleUrls: ['./consultarproducto.component.css']
})
export class ConsultarproductoComponent implements OnInit {

  productos!:Producto[];
  constructor(private productoservice:ProductoserviceService, private router:Router) { }

  ngOnInit(): void {
    this.productoservice.GetProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }
  PutProducto(cliente:Producto):void{
    localStorage.setItem("id",cliente.id.toString());
    this.router.navigate(["editarproducto"]);
  }
  DeleteProducto(cliente:Producto){
    this.productoservice.DeleteProducto(cliente)
    .subscribe(data=>{
      this.productos=this.productos.filter(p=>p!==cliente);
      alert("PRODUCTO ELIMINADO SATISFACTORIAMENTE");
    })
  }

}
