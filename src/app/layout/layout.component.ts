import { Component } from "@angular/core";



@Component({
  selector:'app-layout',
  template:`
  <div class="app-container">

  <app-header></app-header>

  <div class="app-body">

    <app-sidebar></app-sidebar>

    <main class="main-content">
      <app-main-content></app-main-content>
    </main>

  </div>

  <app-footer></app-footer>

</div>
  `,
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent{

}
