import { Component, OnInit } from '@angular/core';
import { TipoexamenService } from 'src/app/core/services/tipoexamen.service';

@Component({
  selector: 'app-tipoexamen',
  templateUrl: './tipoexamen.component.html',
  styleUrls: ['./tipoexamen.component.scss']
})
export class TipoexamenComponent implements OnInit {

  tipoexamenes: any[];
  tipoexamenDialog: boolean;

    tipoexamen: any;

    selectedTipoexamenes: any[];

    totalRecords: number;

    submitted: boolean;
    submitted2: boolean;

    statuses: any[];
    loading: boolean;

  constructor(private tipoExamenService: TipoexamenService) { }

  ngOnInit(): void {
    this.listarTipoExamenes();
  }

  listarTipoExamenes(){
    this.tipoExamenService.listar().subscribe(
      (res: any) => {
        console.log(res);
        this.tipoexamenes = res
      }
    );
  }


  openNuevaTipoexamen(){
    this.tipoexamen = {examen: "", precio: 0};
    this.submitted = false;
    this.tipoexamenDialog = true;
}

guardarTipoExamen(){
  this.submitted = true;

  if (this.tipoexamen.examen) {
      if (this.tipoexamen.id) {
          // this.consultas[this.findIndexById(this.product.id)] = this.product;
          // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      }
      else {
        this.tipoExamenService.guardar(this.tipoexamen).subscribe(
          (res: any) => {
            console.log(res);
            this.tipoexamenDialog = false;
            this.listarTipoExamenes();
          }
        );
          // this.consulta.id = this.createId();
          // this.consulta.image = 'product-placeholder.svg';
          // this.products.push(this.product);
          // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      // this.products = [...this.products];
      this.tipoexamenDialog = false;
      // this.consulta = {};
  }
}

}
