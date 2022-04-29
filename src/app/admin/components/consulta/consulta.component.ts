import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/core/services/consulta.service';

interface Consulta {
  paciente_id: Number;
  profesional_id: Number;
  sucursal_id: Number;
  fecha_consulta?: String;
  id?: Number;
}

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {

    consultaDialog: boolean;

    consultas: Consulta[];

    consulta: Consulta;

    selectedConsultas: Consulta[];

    submitted: boolean;

    statuses: any[];

  constructor( private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.consultaService.listar().subscribe(
            (res: any) => {
              console.log(res);
              this.consultas = res.data
            }
          );
  }

  openNuevaConsulta(){
        this.consulta = {paciente_id: 0, profesional_id: 0, sucursal_id: 0};
        this.submitted = false;
        this.consultaDialog = true;
  }

  hideDialog() {
    this.consultaDialog = false;
    this.submitted = false;
}

guardarConsulta() {
    this.submitted = true;

    if (this.consulta.paciente_id != 0 && this.consulta.paciente_id) {
        if (this.consulta.id) {
            // this.consultas[this.findIndexById(this.product.id)] = this.product;
            // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
        }
        else {
          this.consultaService.guardar(this.consulta).subscribe(
            (res: any) => {
              console.log(res);
            }
          );
            // this.consulta.id = this.createId();
            // this.consulta.image = 'product-placeholder.svg';
            // this.products.push(this.product);
            // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        }

        // this.products = [...this.products];
        this.consultaDialog = false;
        // this.consulta = {};
    }
}


}
