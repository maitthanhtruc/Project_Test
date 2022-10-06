import { HomeComponent } from './test_html/home/home/home.component';
import { TestHtmlTrucComponent } from './test_html/test-html-truc/test-html-truc.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: TestHtmlTrucComponent },
  { path: 'Home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
