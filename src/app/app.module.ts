import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRouterModule } from './router/router.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './main/news/news.component';
import { ToolsComponent } from './main/tools/tools.component';
import { TradersComponent } from './main/traders/traders.component';
import { LessonsComponent } from './main/lessons/lessons.component';
import { HomeComponent } from './main/home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewsComponent,
    ToolsComponent,
    TradersComponent,
    LessonsComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
