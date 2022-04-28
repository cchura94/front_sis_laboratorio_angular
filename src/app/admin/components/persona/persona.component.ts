import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/core/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  lista_personas = []
  display: boolean = false;
  persona_obj: any = {}

  personaForm = new FormGroup({
    nombres: new FormControl(this.persona_obj.nombres, Validators.required),
    apellidos: new FormControl(this.persona_obj.apellidos),
    ci_dni: new FormControl(this.persona_obj.ci_dni),
    telefono: new FormControl(this.persona_obj.telefono),
    fecha_nacimiento: new FormControl(this.persona_obj.fecha_nacimiento),
    direccion: new FormControl(this.persona_obj.direccion),
    ciudad: new FormControl(this.persona_obj.ciudad),
    pais: new FormControl(this.persona_obj.pais),
  });

    

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

  showDialogNuevoPaciente(persona: any = 0) {
    if(persona==0){
      this.persona_obj = {}
      this.prepararFormulario()
      this.display = true;

    }else{
      this.persona_obj = persona
      this.prepararFormulario()
      /*
      this.personaForm.value.apellidos = datos.apellidos
      this.personaForm.value.ci_dni = datos.ci_dni
      this.personaForm.value.telefono = datos.telefono
      */

      this.display = true;
    }
  }

  guardarPersona(){

  }

  guardarNuevoPaciente(){
    console.log(this.persona_obj)
    if(this.persona_obj.nombres == null){
      this.personaService.guardar(this.personaForm.value).subscribe(
        (res:any) => {
          console.log(res);
          this.display = false
          this.listarPersonas();
          this.personaForm.reset()
        }
      )
    }else{

      this.personaService.modificar(this.personaForm.value, this.persona_obj.id).subscribe(
        (res:any) => {
          console.log(res);
          this.display = false
          this.listarPersonas();
          this.personaForm.reset()
        }
      )

    }

  }

  prepararFormulario(){

    this.personaForm = new FormGroup({
      nombres: new FormControl(this.persona_obj.nombres, Validators.required),
      apellidos: new FormControl(this.persona_obj.apellidos),
      ci_dni: new FormControl(this.persona_obj.ci_dni),
      telefono: new FormControl(this.persona_obj.telefono),
      fecha_nacimiento: new FormControl(this.persona_obj.fecha_nacimiento),
      direccion: new FormControl(this.persona_obj.direccion),
      ciudad: new FormControl(this.persona_obj.ciudad),
      pais: new FormControl(this.persona_obj.pais),
    });

  }

}
