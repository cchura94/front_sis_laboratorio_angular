import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.loginService.loginConLaravel(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("token", res.accessToken)

        this.loginService.getPerfil().subscribe(
          (res: any) => {
            console.log(res);
          }
        )
        alert("Bienvenido")
      },
      (error: any) => {
        console.log(error);
        if(error.status === 401){
          alert("Credenciales Incorrectas")
        }
      }
    )
  }

}
