import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaMostrarComponent } from './components/consulta-mostrar/consulta-mostrar.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { PersonaComponent } from './components/persona/persona.component';

const routes: Routes = [
  {
    path: 'persona',
    component: PersonaComponent
  },
  {
    path: 'consultas',
    component: ConsultaComponent
  },
  {
    path: 'consultas/:id',
    component: ConsultaMostrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
