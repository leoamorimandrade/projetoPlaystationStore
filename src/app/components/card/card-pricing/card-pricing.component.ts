import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {
  @Input ()
  gameType:string="Digital PS$"
  @Input ()
  gamePrice:string="R$ 3"

  constructor() { }

  ngOnInit(): void {
  }

}
