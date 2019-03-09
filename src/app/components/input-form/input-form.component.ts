import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "input-form",
  templateUrl: "./input-form.component.html",
  styleUrls: ["./input-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
