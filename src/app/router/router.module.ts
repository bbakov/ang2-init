import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../main/home/home.component';
import { NewsComponent } from '../main/news/news.component';
import { ToolsComponent } from '../main/tools/tools.component';
import { TradersComponent } from '../main/traders/traders.component';
import { LessonsComponent } from '../main/lessons/lessons.component';

const routes: Routes = [
  // { path: '',  redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'news/:id', component: NewsComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'traders', component: TradersComponent },
  { path: 'lessons', component: LessonsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {
	
}