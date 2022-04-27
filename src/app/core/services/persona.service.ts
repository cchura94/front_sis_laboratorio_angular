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
}
