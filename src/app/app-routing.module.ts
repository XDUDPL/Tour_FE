import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import {TourLoaiComponent} from "./pages/tour-loai/tour-loai.component";
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import {KhachhangsComponent} from "./pages/khachhangs/khachhangs.component";
import {NhanViensComponent} from "./pages/nhanviens/nhanviens.component";
import {TourComponent} from "./pages/tour/tour.component";

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'tour_loai',
    component: TourLoaiComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'khach-hang',
    component: KhachhangsComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'nhan_vien',
    component: NhanViensComponent,
    canActivate: [ AuthGuardService ]
  }
  ,
  {
    path: 'tour',
    component: TourComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, TasksComponent]
})
export class AppRoutingModule { }
