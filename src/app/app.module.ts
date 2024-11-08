import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MainPageComponent } from './main-page/main-page.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [],
  imports: [BrowserModule, RouterModule.forRoot(routes), MainPageComponent],
  bootstrap: []
})
export class AppModule {}
