import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "message-box",
  templateUrl: "./message-box.component.html",
  styleUrls: ["./message-box.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageBoxComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
