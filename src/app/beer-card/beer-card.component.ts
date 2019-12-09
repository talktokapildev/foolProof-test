import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-beer-card",
  templateUrl: "./beer-card.component.html",
  styleUrls: ["./beer-card.component.css"]
})
export class BeerCardComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() text: string;
  constructor() {}

  ngOnInit() {}
}
