import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "map-cell",
  templateUrl: "./map-cell.component.html",
  styleUrls: ["./map-cell.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapCellComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
