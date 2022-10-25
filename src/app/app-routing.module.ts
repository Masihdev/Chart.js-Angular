import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyChartComponent } from './my-chart/my-chart.component';

const routes: Routes = [{ path: 'chart', component: MyChartComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
