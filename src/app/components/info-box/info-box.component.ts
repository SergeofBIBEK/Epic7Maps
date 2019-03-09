import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "info-box",
  templateUrl: "./info-box.component.html",
  styleUrls: ["./info-box.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoBoxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
