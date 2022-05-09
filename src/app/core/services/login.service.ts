import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlBase= environment.servidor

  constructor(private http: HttpClient) { }
  
  loginConLaravel(datos: any){
    return this.http.post(`${this.urlBase}/v1/auth/login`, datos);
  }

  getPerfil(){
    return this.http.get(`${this.urlBase}/v1/auth/perfil`);
  }

}
