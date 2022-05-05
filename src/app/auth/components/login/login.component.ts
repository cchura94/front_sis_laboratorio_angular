import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';
import { AppConfig } from 'src/app/layout-admin/api/appconfig';
import { ConfigService } from 'src/app/layout-admin/service/app.config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  styles:[`
    :host ::ng-deep .p-password input {
    width: 100%;
    padding:1rem;
    }

    :host ::ng-deep .pi-eye{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash{
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent implements OnInit {

  valCheck: string[] = ['remember'];

  password: string;
  
  config: AppConfig;
  
  subscription: Subscription;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private loginService: LoginService,
    public configService: ConfigService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
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
        this.router.navigate(["/admin"])
        
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
