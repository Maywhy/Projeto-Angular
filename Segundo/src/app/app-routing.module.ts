import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CorpoComponent } from './corpo/corpo.component';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [

{ path: 'corpo' , component: CorpoComponent },
{ path: 'tarefas' , component: TarefasComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
