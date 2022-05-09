import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/core/services/consulta.service';
import { LazyLoadEvent } from 'primeng/api';
import { TipoexamenService } from 'src/app/core/services/tipoexamen.service';

interface Consulta {
  paciente_id: any;
  profesional_id: any;
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

    uploadedFiles: any[] = [];
    consultaDialog: boolean;
    archivoDialog: boolean;

    consultas: Consulta[];

    consulta: Consulta;
    documento: any;
    consul: any;

    selectedConsultas: Consulta[];

    totalRecords: number;

    submitted: boolean;
    submitted2: boolean;

    statuses: any[];
    loading: boolean;

    filteredPacientes: any[]
    filteredTipoExamenes: any[];

  constructor( private consultaService: ConsultaService, private tipoExamenService: TipoexamenService) { }

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

  openRegistroArchivo(con: any){
    this.documento = {tipoexamen_id: 1, detalle: ""};
    this.submitted2 = false;
    this.archivoDialog = true;
    this.consul = con
}

onUpload(event) {
  for(let file of event.files) {
      this.uploadedFiles.push(file);
  }

  // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
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
          this.consulta.paciente_id = this.consulta.paciente_id.id;
          this.consulta.profesional_id = this.consulta.profesional_id.id;
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

guardarArchivo(){
  console.log(this.uploadedFiles.length)
  let formD = new FormData;
  formD.append("tipoexamen_id", this.documento.tipoexamen_id.id);
  formD.append("detalle", this.documento.detalle);
  formD.append("archivo", this.uploadedFiles[0]); 

  this.consultaService.subirArchivo(formD, this.consul.id).subscribe(
    (res: any) => {
      console.log(res);
    },
    (error: any) => {
      console.log(error)
    }
  )
}

onBeforeUploadListener(event, uploader:any){
// your have acces to files :
console.log(uploader.files)
this.uploadedFiles = uploader.files
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

buscarPacientes(event) {
  
  let query = event.query;

  this.consultaService.buscar(query).subscribe(
    (res: any) => {

      this.filteredPacientes = res;
    }
  )


}

buscarTipoExamenes(event){
  let query = event.query;

  this.tipoExamenService.listar().subscribe(
    (res: any) => {

      this.filteredTipoExamenes = res;
    }
  )

}
}
