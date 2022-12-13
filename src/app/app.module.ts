import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/content/sidebar/sidebar.component';
import { BoardComponent } from './components/content/board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardBarComponent } from './components/content/board/board-bar/board-bar.component';
import { SwimlanesComponent } from './components/content/board/swimlanes/swimlanes.component';
import { SwimlaneComponent } from './components/content/board/swimlanes/swimlane/swimlane.component';
import { CardComponent } from './components/content/board/swimlanes/swimlane/card/card.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    BoardComponent,
    BoardBarComponent,
    SwimlanesComponent,
    SwimlaneComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
	DragDropModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
