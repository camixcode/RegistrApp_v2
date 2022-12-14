import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresarGuard } from './ingresar.guard';

import { NoIngresarGuard } from './no-ingresar.guard';
import { E404Page } from './pages/e404/e404.page';
import { SedeAlumnoComponent } from './sede-alumno/sede-alumno.component';


const routes: Routes = [


  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },



  { 
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule),
    canActivate: [IngresarGuard]
  },


  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [IngresarGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresarGuard]
  },
  {
    path: 'rcontrasenia',
    loadChildren: () => import('./rcontrasenia/rcontrasenia.module').then( m => m.RContraseniaPageModule),
    canActivate: [NoIngresarGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule),
    canActivate: [IngresarGuard]
  },
  {
    path: 'docente',
    loadChildren: () => import('./docente/docente.module').then( m => m.DocentePageModule),
    canActivate: [IngresarGuard]
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./generar-qr/generar-qr.module').then( m => m.GenerarQRPageModule),
    canActivate: [IngresarGuard]
  },
  {
    path: 'curso',
    loadChildren: () => import('./curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'perfil-docente',
    loadChildren: () => import('./perfil-docente/perfil-docente.module').then( m => m.PerfilDocentePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'sedes',
    loadChildren: () => import('./sedes/sedes.module').then( m => m.SedesPageModule)
  },
  {
    path: 'login-google',
    loadChildren: () => import('./login-google/login-google.module').then( m => m.LoginGooglePageModule),
    canActivate: [NoIngresarGuard]
  },
  {
    path: 'sede-alumno', component:SedeAlumnoComponent
  },
  {
    path: 'leer-qr',
    loadChildren: () => import('./leer-qr/leer-qr.module').then( m => m.LeerQRPageModule)
  },

  {
    path: 'lista-prof',
    loadChildren: () => import('./lista-prof/lista-prof.module').then( m => m.ListaProfPageModule)
  },

  { path: '**', component: E404Page },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }