import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { TablelistComponent } from './main/tablelist/tablelist.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { TypographyComponent } from './main/typography/typography.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'tablelist', component: TablelistComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'typography', component: TypographyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
