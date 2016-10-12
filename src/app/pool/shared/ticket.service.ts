import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { Ticket } from './ticket.model';

@Injectable()
export class TicketService {
  private tickets: Observable<Ticket[]> = Observable.of([]);

  constructor() { }

  replace(tickets: Ticket[]): Observable<Ticket[]> {
    this.tickets = Observable.of(tickets);
    return this.tickets;
  }

  draw(amount: number): Observable<Ticket[]> {
    return this.getAll().map(
      (tickets) => {
        const drawnTickets: Ticket[] = [];
        while(drawnTickets.length < amount) {
          let randomKey = Math.floor(Math.random() * tickets.length);
          drawnTickets.push(tickets[randomKey]);
          tickets.splice(randomKey);
          if(tickets.length < (amount-drawnTickets.length)) {
            break;
          }
        }
        return drawnTickets;
      }
    );
  }

  getAll(): Observable<Ticket[]> {
    return this.tickets;
  }
}
