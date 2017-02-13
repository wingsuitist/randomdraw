import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TicketService, Ticket } from './shared';

@Component({
  selector: 'rdr-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {
  tickets: Ticket[];
  ticketsDrawn: Ticket[];
  amountToDraw: number = 2;
  ticketsString: string = '';

  constructor(
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.fetchTickets(this.ticketService.getAll())
  }

  replace() {
    const newTickets = [];
    let currentId = 0;
    this.ticketsString.split("\n").map(
      (line) => {
        if(line.length > 0) {
          newTickets.unshift(new Ticket(currentId, line.trim()));
        }
      }
    );
    this.fetchTickets(this.ticketService.replace(newTickets));
  }
  
  fetchTickets(ticketObs: Observable<Ticket[]>) {
    ticketObs.subscribe((tickets) => {
        this.tickets = tickets;
        this.ticketsString = '';
        this.tickets.map((ticket, index) => {
          this.ticketsString += index > 0 ? "\n" : "";
          this.ticketsString += ticket.name;
          return ticket;
        });
    });
  }

  draw(amountToDraw: number) {
    this.ticketService.draw(+amountToDraw).subscribe(
      (ticketsDrawn) => {
        this.ticketsDrawn = ticketsDrawn;
      });
  }
}
