import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SectionWrapperComponent } from "./layout/section-wrapper/section-wrapper.component";
import { WrapperFrameComponent } from "./layout/wrapper-frame/wrapper-frame.component";
import { LogoComponent } from "./logo/logo.component";
import { LinkComponent } from "./elements/link/link.component";
import { BurgerComponent } from "./navigation/burger/burger.component";
import { NavComponent } from "./navigation/nav/nav.component";
import { NavItemComponent } from "./navigation/nav-item/nav-item.component";
import { TitleComponent } from "./elements/title/title.component";
import { ParagraphComponent } from "./elements/paragraph/paragraph.component";
import { LookupComponent } from "./lookup/lookup.component";
import { HeroComponent } from "./hero/hero.component";
import { ImageComponent } from "./elements/image/image.component";
import { BeerCardComponent } from './beer-card/beer-card.component';
import { LikeButtonComponent } from './elements/like-button/like-button.component';
import { GridItemComponent } from './layout/grid-item/grid-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionWrapperComponent,
    WrapperFrameComponent,
    LogoComponent,
    LinkComponent,
    BurgerComponent,
    NavComponent,
    NavItemComponent,
    TitleComponent,
    ParagraphComponent,
    LookupComponent,
    HeroComponent,
    ImageComponent,
    BeerCardComponent,
    LikeButtonComponent,
    GridItemComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
