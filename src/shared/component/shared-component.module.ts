import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MasterComponent } from './master/master.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, MasterComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,MasterComponent,FooterComponent]
})
export class SharedComponentModule { }
