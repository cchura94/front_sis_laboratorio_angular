import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/core/services/consulta.service';
import { LazyLoadEvent } from 'primeng/api';

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

    totalRecords: number;

    submitted: boolean;

    statuses: any[];
    loading: boolean;

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

loadConsultas(event: LazyLoadEvent) {
  this.loading = true;

  console.log("****: ", event.first/event.rows)
  let page = (event.first/event.rows) + 1

  this.consultaService.listar(page, event.rows).subscribe(
    (res: any) => {
      console.log(res);
      this.consultas = res.data
      this.totalRecords = res.total
      this.loading = false;
    }
  );

  /*
  setTimeout(() => {
      this.customerService.getCustomers({lazyEvent: JSON.stringify(event)}).then(res => {
          this.customers = res.customers;
          this.totalRecords = res.totalRecords;
          this.loading = false;
      })
  }, 1000);
  */
}


}
