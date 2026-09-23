import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    SidebarComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild([{
      path:'',component:LayoutComponent
    }])
  ]
})
export class LayoutModule { }
