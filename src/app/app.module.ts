
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { DxDataGridModule,DxTemplateModule } from 'devextreme-angular';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { TourLoaiComponent } from './pages/tour-loai/tour-loai.component';
import {TourLoaiService} from "./services/tour-loai.service";
import {KhachhangService} from "./services/khachhang.service";
import { KhachhangsComponent } from './pages/khachhangs/khachhangs.component';
import { TourComponent } from './pages/tour/tour.component';
import { NhanvienComponent } from './pages/nhanvien/nhanvien.component';
import {TourService} from "./services/tour.service";
import { DetailGridComponent } from './pages/tour/detail-grid/detail-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TourLoaiComponent,
    KhachhangsComponent,
    TourComponent,
    NhanvienComponent,
    DetailGridComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    DxDataGridModule,
    HttpClientModule,
    DxTemplateModule
  ],
  providers: [AuthService,
    ScreenService,
    AppInfoService,
    TourLoaiService,
    KhachhangService,
    TourService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
