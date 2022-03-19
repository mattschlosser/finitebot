import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':username',
    loadChildren: () =>
      import('./features/chalk-boom-overlay/chalk-boom-overlay.module').then(
        (mod) => mod.ChalkBoomOverlayModule
      ),
  },
  {
    path: '', 
    loadChildren: () => 
      import('./features/intro/intro.module').then((mod) => mod.IntroModule)
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
