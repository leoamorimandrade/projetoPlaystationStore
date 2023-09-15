import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameCover:string=""
  @Input ()
  gameType:string="Digital PS$"
  @Input ()
  gamePrice:string="R$ 3"
  @Input()
  gameLabel:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
