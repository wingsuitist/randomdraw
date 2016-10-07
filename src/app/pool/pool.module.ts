import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoolRoutingModule } from './pool-routing.module';
import { PoolComponent } from './pool.component';

@NgModule({
  imports: [
    CommonModule,
    PoolRoutingModule
  ],
  declarations: [PoolComponent]
})
export class PoolModule { }
