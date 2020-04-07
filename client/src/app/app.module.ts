import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//Services
import { appServices } from "./app.services";

//components
import { appComponents } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, ...appComponents],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [...appServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
