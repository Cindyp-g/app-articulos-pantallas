import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CargarArchivosComponent } from './componentes/cargar-archivos/cargar-archivos.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'registro',component:RegistroComponent},
{path:'cargar-archivos',component:CargarArchivosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
