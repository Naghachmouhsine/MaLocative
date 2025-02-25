import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true })
    , provideRouter(routes)
    , provideAnimationsAsync()
    , provideHttpClient(),
  provideAnimationsAsync()
    , {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '56643628081-lmbnk4nbtu6th0dinqb6u8hfp0e5croi.apps.googleusercontent.com'
          )
        }
      ],
      onError: (error) => {
        console.error(error);
      }
    } as SocialAuthServiceConfig
  },
  ]
};
