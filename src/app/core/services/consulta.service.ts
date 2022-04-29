import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  urlBase= environment.servidor

  lista_personas: any[] = []

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get(`${this.urlBase}/consulta`);
  }

  guardar(datos){
    return this.http.post(`${this.urlBase}/consulta`, datos)
  }

  modificar(datos, id){
    return this.http.put(`${this.urlBase}/consulta/${id}`, datos)
  }
}