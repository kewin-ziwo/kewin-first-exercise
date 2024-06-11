import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";
import { ContentWrapperComponent } from "src/components/main-nav/content-wrapper.component";
import { NavigationBarComponent } from "src/components/navigation-bar/navigation-bar.component";
import { SubNavigationBarComponent } from "src/components/sub-navigation-bar/sub-navigation-bar.component";

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NxWelcomeComponent,
    ContentWrapperComponent,
    NavigationBarComponent,
    SubNavigationBarComponent,
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "myngapp";
}
