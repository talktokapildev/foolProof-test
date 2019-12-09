import { Component, OnInit } from "@angular/core";
import { ApiService } from "./services/api.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data: any = [];
  isLoading = true;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .getGridData("https://api.punkapi.com/v2/beers?page=1&per_page=10")
      .subscribe(res => {
        this.isLoading = false;
        this.data = res;
      });
  }
}
