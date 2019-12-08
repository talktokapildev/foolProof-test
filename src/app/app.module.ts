import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from './shared/footer/footer.component';
import { GridContainerComponent } from './layout/grid-container/grid-container.component';
import { SectionWrapperComponent } from './layout/section-wrapper/section-wrapper.component';
import { WrapperFrameComponent } from './layout/wrapper-frame/wrapper-frame.component';
import { LogoComponent } from './logo/logo.component';
import { LinkComponent } from './elements/link/link.component';
import { BurgerComponent } from './navigation/burger/burger.component';
import { NavComponent } from './navigation/nav/nav.component';
import { NavItemComponent } from './navigation/nav-item/nav-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, GridContainerComponent, SectionWrapperComponent, WrapperFrameComponent, LogoComponent, LinkComponent, BurgerComponent, NavComponent, NavItemComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
