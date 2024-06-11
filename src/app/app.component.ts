import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ContentWrapperComponent } from 'src/components/main-nav/content-wrapper.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ContentWrapperComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myngapp';
}
