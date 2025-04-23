import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './Components/data/data.component';
import { LocationComponent } from './Components/location/location.component';
import { QNewComponent } from './Components/Components/q-new/q-new.component';

const routes: Routes = [ { path: '', redirectTo: '/data', pathMatch: 'full' },
  { path: 'data', component: DataComponent },
  { path: 'location', component: LocationComponent },
  { path: 'new', component: QNewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
