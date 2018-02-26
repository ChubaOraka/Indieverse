import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from 'app/music/music.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'music', component: MusicComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}
