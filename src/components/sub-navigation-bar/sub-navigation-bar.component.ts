import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: "app-sub-navigation-bar",
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: "./sub-navigation-bar.component.html",
  styleUrl: "./sub-navigation-bar.component.css",
})
export class SubNavigationBarComponent {}
