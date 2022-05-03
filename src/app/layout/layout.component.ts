import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  items: any[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'INICIO',
          icon: 'pi pi-fw pi-home',
          routerLink: '/'
          
      },
      {
          label: 'Ingresar',
          icon: 'pi pi-fw pi-pencil',
          routerLink: '/auth/login'
      }
  ];
  }

}
