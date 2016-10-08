import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PoolRoutingModule } from './pool-routing.module';
import { PoolComponent } from './pool.component';

import { TicketService } from './shared/ticket.service';

@NgModule({
  imports: [
    CommonModule,
    PoolRoutingModule,
    FormsModule
  ],
  exports: [PoolComponent],
  providers: [TicketService],
  declarations: [PoolComponent]
})
export class PoolModule { }
