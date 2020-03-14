import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppinfoService } from './app/appinfo.service';
import { ChartsModule } from 'ng2-charts';
import { ChartPageComponent } from './chart-page/chart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],
  providers: [AppinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
