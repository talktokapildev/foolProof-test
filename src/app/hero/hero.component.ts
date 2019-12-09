import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
  dummyText = `Some hops is plowed. An often hairy girl scout thoroughly makes a pact with the Honey Brown over the Budweiser. A blood clot makes a pact with the discusting satellite brewery. A lover about the Pilsner Urquell takes a peek at the bottle of beer. The coors light, the crank case of an IPA, and a Citra Ninja are what made America great!`;
  constructor() {}

  ngOnInit() {}
}
