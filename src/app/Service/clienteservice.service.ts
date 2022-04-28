import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { Cliente } from '../Modelo/Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteserviceService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/clientes';
  GetClientes(){
    return this.http.get<Cliente[]>(this.Url);
  }
  PostClientes(cliente:Cliente){
    return this.http.post<Cliente>(this.Url,cliente);
  }
  GetClientesId(id:number){
    return this.http.get<Cliente>(this.Url+"/"+id);
  }
  PutCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.Url+"/"+cliente.id,cliente);
  }
  DeleteCliente(cliente:Cliente){
    return this.http.delete<Cliente>(this.Url+"/"+cliente.id);
  }
}
