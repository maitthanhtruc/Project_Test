import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestHtmlTrucComponent } from './test_html/test-html-truc/test-html-truc.component';
import { MenuComponent } from './test_html/menu/menu/menu.component';
import { HomeComponent } from './test_html/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestHtmlTrucComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, TestHtmlTrucComponent]
})
export class AppModule { }
