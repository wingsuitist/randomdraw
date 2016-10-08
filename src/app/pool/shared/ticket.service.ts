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
        for(let ticket of tickets) {
          if(drawnTickets.length <= amount) {
            drawnTickets.push(ticket);
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
