import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { Producto } from '../Modelo/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoserviceService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/productos';

  GetProductos(){
    return this.http.get<Producto[]>(this.Url);
  }
  PostProductos(producto:Producto){
    return this.http.post<Producto>(this.Url,producto);
  }
  GetProductosId(id:number){
    return this.http.get<Producto>(this.Url+"/"+id);
  }
  PutProducto(producto:Producto){
    return this.http.put<Producto>(this.Url+"/"+producto.id,producto);
  }
  DeleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.Url+"/"+producto.id);
  }
}
