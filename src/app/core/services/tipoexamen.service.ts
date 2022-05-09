import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoexamenService {
  urlBase= environment.servidor

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get(`${this.urlBase}/tipoexamen`);
  }

  guardar(datos){
    return this.http.post(`${this.urlBase}/tipoexamen`, datos);
  }
}
