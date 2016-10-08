import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TicketService, Ticket } from './shared';

@Component({
  selector: 'rdr-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {
  tickets: Observable<Ticket[]>;
  ticketsDrawn: Observable<Ticket[]>;
  ticketsString: string = '';

  constructor(
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.tickets = this.ticketService.getAll();
    this.tickets.subscribe(
      (tickets) => {
        this.ticketsString = '';
        tickets.map(ticket => {
          this.ticketsString += "\n" + ticket.name;
        })
      }
    )
  }

  replace() {
    const tickets = [];
    let currentId = 0;
    this.ticketsString.split("\n").map(
      (line) => {
        tickets.unshift(
          new Ticket(currentId, line.trim())
        );
      }
    );
    this.tickets = this.ticketService.replace(tickets);
  }

  draw() {
    this.ticketsDrawn = this.ticketService.draw(2);
  }
}
