import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavLinkComponent } from "../nav-link/nav-link.component";

@Component({
  selector: "app-navigation-bar",
  standalone: true,
  imports: [CommonModule, NavLinkComponent],
  templateUrl: "./navigation-bar.component.html",
  styleUrl: "./navigation-bar.component.css",
})
export class NavigationBarComponent {}
