import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "map-cell",
  templateUrl: "./map-cell.component.html",
  styleUrls: ["./map-cell.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapCellComponent implements OnInit {
  @Input() cell;

  constructor() {}

  ngOnInit() {}
}
