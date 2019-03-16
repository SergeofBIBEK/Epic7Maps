import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { RaidPathPlannerService } from "./state";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private service: RaidPathPlannerService) {}

  ngOnInit() {
    this.service.initializeMap();
  }
}
