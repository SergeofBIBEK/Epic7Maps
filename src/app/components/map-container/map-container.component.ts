import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { RaidPathPlannerService } from "src/app/state";

@Component({
  selector: "map-container",
  templateUrl: "./map-container.component.html",
  styleUrls: ["./map-container.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapContainerComponent implements OnInit {
  constructor(private service: RaidPathPlannerService) {}

  ngOnInit() {}
}
