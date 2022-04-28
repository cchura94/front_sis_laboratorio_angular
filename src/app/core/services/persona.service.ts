import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  urlBase= environment.servidor

  lista_personas: any[] = []

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get(`${this.urlBase}/persona`);
  }

  guardar(datos){
    return this.http.post(`${this.urlBase}/persona`, datos)
  }

  modificar(datos, id){
    return this.http.put(`${this.urlBase}/persona/${id}`, datos)
  }
}
