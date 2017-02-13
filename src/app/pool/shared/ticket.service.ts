import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import { Ticket } from './ticket.model';

@Injectable()
export class TicketService {
  private tickets: Ticket[] = [
    new Ticket(1, "Paula"),
    new Ticket(1, "Petra"),
    new Ticket(1, "Pia"),
    new Ticket(1, "Peter"),
    new Ticket(1, "Paul"),
    new Ticket(1, "Pius"),
    new Ticket(1, "Pablo")
  ];

  constructor() { }

  replace(tickets: Ticket[]): Observable<Ticket[]> {
    this.tickets = tickets;
    return Observable.of(this.tickets);
  }

  draw(amount: number): Observable<Ticket[]> {
    return this.getAll().map(
      (tickets) => {
        return _.sampleSize(tickets, amount);
      }
    );
  }

  getAll(): Observable<Ticket[]> {
    return Observable.of(this.tickets);
  }
}
