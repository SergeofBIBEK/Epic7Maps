import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MapContainerComponent } from "./components/map-container/map-container.component";
import { MapCellComponent } from './components/map-cell/map-cell.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { MessageBoxComponent } from './components/message-box/message-box.component';

@NgModule({
  declarations: [AppComponent, MapContainerComponent, MapCellComponent, InfoBoxComponent, InputFormComponent, MessageBoxComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
