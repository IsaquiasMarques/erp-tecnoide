import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

const scrollingConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
}

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollingConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, inMemoryScrollingFeature)
  ]
};
