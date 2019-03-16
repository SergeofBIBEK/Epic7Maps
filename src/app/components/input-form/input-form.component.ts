import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { RaidPathPlannerService } from "src/app/state";

@Component({
  selector: "input-form",
  templateUrl: "./input-form.component.html",
  styleUrls: ["./input-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFormComponent implements OnInit {
  constructor(private service: RaidPathPlannerService) {}

  ngOnInit() {}
}
