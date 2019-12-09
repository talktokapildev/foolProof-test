import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-lookup",
  templateUrl: "./lookup.component.html",
  styleUrls: ["./lookup.component.css"]
})
export class LookupComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() tag: string;
  @Input() grid: string;
  constructor() {}

  ngOnInit() {}
}
