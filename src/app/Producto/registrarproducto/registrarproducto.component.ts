import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import{ProductoserviceService}from'../../Service/productoservice.service';

@Component({
  selector: 'app-registrarproducto',
  templateUrl: './registrarproducto.component.html',
  styleUrls: ['./registrarproducto.component.css']
})
export class RegistrarproductoComponent implements OnInit {

  producto:Producto=new Producto();
  constructor(private router:Router, private productoservice:ProductoserviceService) { }
  ngOnInit() {
  }
  
  PostProductos(){
    this.productoservice.PostProductos(this.producto).subscribe(data=>{
      alert("SE REGISTRÓ EXITOSAMENTE EL PRODUCTO: "+ this.producto.nombreProducto);
     this.router.navigate(["consultarproducto"]);
    });
  }
}
