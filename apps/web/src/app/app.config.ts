import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { ToastrComponent } from '@d8/libs/primitives';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideToastr({
      toastComponent: ToastrComponent,
      closeButton: true,
      positionClass: 'toast-top-right',
      autoDismiss: false,
      progressBar: true
    }),
  ],
};
