import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaService } from 'src/app/core/services/consulta.service';

@Component({
  selector: 'app-consulta-mostrar',
  templateUrl: './consulta-mostrar.component.html',
  styleUrls: ['./consulta-mostrar.component.scss']
})
export class ConsultaMostrarComponent implements OnInit {
  public id: string;
  public consulta: any;

  constructor(private route: ActivatedRoute, protected consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.mostrarConsulta();
  }

  mostrarConsulta(){
    this.consultaService.mostrar(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.consulta = res
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
