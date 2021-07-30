import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { ScheduleAPIService } from './shared/api/schedule-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { HeaderComponent } from './components/header/header.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ScheduleFormComponent } from './components/shedule-form/schedule-form.component';
import { ImageUploadDirective } from './components/image-upload/image-upload.directive';
import { OldestDatePipe } from './pipes/oldest-date.pipe';
import { NewestDatePipe } from './pipes/newest-date.pipe';
import { DecrescentOrderPipe } from './pipes/decrescent-order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    PrimaryButtonComponent,
    HeaderComponent,
    UserProfileComponent,
    LeftSidebarComponent,
    SideMenuComponent,
    ScheduleFormComponent,
    ImageUploadDirective,
    OldestDatePipe,
    NewestDatePipe,
    DecrescentOrderPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ScheduleAPIService, { delay: 500 }),
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatTabsModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
