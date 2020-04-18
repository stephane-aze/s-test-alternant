import { Component } from '@angular/core';
import { AppPage } from './AppPage'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <div class="app-container">
      <app-nav [pageName]="activatedPageName"></app-nav>
      <router-outlet (activate)="onRouteActivated($event)"></router-outlet>
    </div>
`,
styles: [
  `
    .app-container {
      max-width: 900px;
      margin: auto;
    }
  `,
],
})
export class AppComponent {
  public activatedPageName = 'QuizzApp';

  public onRouteActivated(activatedPage: AppPage): void {
    this.activatedPageName = activatedPage.pageTitle;
  }}
