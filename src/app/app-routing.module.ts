import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProbabilidadeComponent } from './probabilidade/probabilidade.component';
import { CondicionalComponent } from './condicional/condicional.component';

const routes: Routes = [
  { path: 'probabilidade', component: ProbabilidadeComponent },
  { path: 'condicional', component: CondicionalComponent },
  { path: '', redirectTo: '/probabilidade', pathMatch: 'full' }, // Rota padrão
  { path: '**', redirectTo: '/probabilidade', pathMatch: 'full' } // Rota para lidar com rotas não encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
