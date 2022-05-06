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

  listar(page=1, limit=10){
    return this.http.get(`${this.urlBase}/consulta?page=${page}&limit=${limit}`);
  }

  guardar(datos){
    return this.http.post(`${this.urlBase}/consulta`, datos)
  }

  mostrar(id){
    return this.http.get(`${this.urlBase}/consulta/${id}`)
  }

  modificar(datos, id){
    return this.http.put(`${this.urlBase}/consulta/${id}`, datos)
  }

  subirArchivo(datos, id){
    return this.http.post(`${this.urlBase}/consulta/${id}/asignar-tipo-examen`, datos)
  }
}
