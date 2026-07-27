import { ErrorHandler, NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@shared/shared.module';
import { GlobalErrorHandlerService } from '@core/services/global-error-handler/global-error-handler.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [provideHttpClient(), { provide: ErrorHandler, useClass: GlobalErrorHandlerService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
