import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
