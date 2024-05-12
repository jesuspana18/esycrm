import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppConfigModule } from './config/config.module';
import { AppSidebarComponent } from "./app.sidebar.component";
import { AppLayoutComponent } from "./app.layout.component";
import {RatingModule} from "primeng/rating";
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {ProductService} from "./service/product.service";
import { LandingComponent } from './components/landing/landing.component';
import {CommonModule} from "@angular/common";
import {DividerModule} from "primeng/divider";
import {StyleClassModule} from "primeng/styleclass";
import {ChartModule} from "primeng/chart";
import {PanelModule} from "primeng/panel";
import {CarouselModule} from "primeng/carousel";
import {PhotoService} from "./service/photo.service";

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
        HomeComponent,
        ProductsComponent,
        LandingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        RatingModule,
        DataViewModule,
        DropdownModule,
        ButtonModule,
        CommonModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        CarouselModule,
    ],
    exports: [AppLayoutComponent],
  providers: [ ProductService, PhotoService ],
})
export class AppLayoutModule { }
