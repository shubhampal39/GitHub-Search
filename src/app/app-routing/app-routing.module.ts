import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from '../component/history/history.component';
import { SearchComponent } from '../component/search/search.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'search', component: SearchComponent },
      { path: 'history', component: HistoryComponent },
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
