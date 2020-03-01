import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FilterDataComponent } from './filter-data/filter-data.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';


const routes: Routes = [
   { path:'', component: HomeComponent},
   { path:'contact', component: ContactComponent},
   { path: 'filterdata', component: FilterDataComponent},
   { path: 'albums', component: AlbumDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
