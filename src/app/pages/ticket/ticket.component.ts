import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'street-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  assunto;
  texto;

  mensagemError;

  constructor() { }

  ngOnInit() {
  }

}
