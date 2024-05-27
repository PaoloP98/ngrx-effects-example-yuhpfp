import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { fromRoot } from './store';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([fromRoot.RootEffects]),
    StoreModule.forRoot({
      rootState: fromRoot.rootReducer
    }),
    StoreDevtoolsModule.instrument({})
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
