import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { IconsComponent } from './icons/icons.component';
import { ToobaPicComponent } from './tooba-pic/tooba-pic.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BodyComponent } from './body/body.component';
import { DateComponent } from './date/date.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { ToolbarIconsComponent } from './toolbar-icons/toolbar-icons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    SettingsComponent,
    ProfilePicComponent,
    IconsComponent,
    ToobaPicComponent,
    ToolbarComponent,
    BodyComponent,
    DateComponent,
    TextAreaComponent,
    ToolbarIconsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
