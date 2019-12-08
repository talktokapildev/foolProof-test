import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-nav-item",
  templateUrl: "./nav-item.component.html",
  styleUrls: ["./nav-item.component.css"]
})
export class NavItemComponent implements OnInit {
  @Input("title") title: string;
  @Input("url") url: string;

  constructor() {}

  ngOnInit() {}
}
