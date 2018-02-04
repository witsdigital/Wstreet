import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'street-plantel',
  templateUrl: './plantel.component.html',
  styleUrls: ['./plantel.component.css']
})
export class PlantelComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }


  openModal(modal){
    this.modal.open(modal);
  }
}
