import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostItemComponent } from './post-item/post-item.component';
import { FormsModule } from '@angular/forms';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostListComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
