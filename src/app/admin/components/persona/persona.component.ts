import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/core/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  lista_personas = []

  constructor(protected personaService: PersonaService) { }

  ngOnInit(): void {
    this.listarPersonas();
  }

  listarPersonas(){
    this.personaService.listar().subscribe(
      (res: any) => {
        this.lista_personas = res.data
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

}
