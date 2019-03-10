import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MapContainerComponent } from "./components/map-container/map-container.component";
import { MapCellComponent } from "./components/map-cell/map-cell.component";
import { InfoBoxComponent } from "./components/info-box/info-box.component";
import { InputFormComponent } from "./components/input-form/input-form.component";
import { MessageBoxComponent } from "./components/message-box/message-box.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatToolbarModule
} from "@angular/material";
import { RaidPathPlannerQuery, RaidPathPlannerService, RaidPathPlannerStore } from "./state";

@NgModule({
  declarations: [
    AppComponent,
    MapContainerComponent,
    MapCellComponent,
    InfoBoxComponent,
    InputFormComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [RaidPathPlannerQuery, RaidPathPlannerService, RaidPathPlannerStore],
  bootstrap: [AppComponent]
})
export class AppModule {}
