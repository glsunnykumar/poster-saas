import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "brothers-helping-group", appId: "1:242087385547:web:9dfeacfd700984620c3e4e", databaseURL: "https://brothers-helping-group-default-rtdb.firebaseio.com", storageBucket: "brothers-helping-group.firebasestorage.app", apiKey: "AIzaSyCHPRQVZdSkxcKg6S9Fc_ZNCG52V5G_UdM", authDomain: "brothers-helping-group.firebaseapp.com", messagingSenderId: "242087385547", measurementId: "G-N59BW6E01X", projectNumber: "242087385547", version: "2" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
