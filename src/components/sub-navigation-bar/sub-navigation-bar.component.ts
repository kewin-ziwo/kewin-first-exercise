import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../button/button.component";
import { NavLinkComponent } from "../nav-link/nav-link.component";

@Component({
  selector: "app-sub-navigation-bar",
  standalone: true,
  imports: [CommonModule, ButtonComponent, NavLinkComponent],
  templateUrl: "./sub-navigation-bar.component.html",
  styleUrl: "./sub-navigation-bar.component.css",
})
export class SubNavigationBarComponent {}
