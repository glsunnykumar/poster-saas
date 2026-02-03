import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  constructor(private fs: Firestore) {}

  getTemplates() {
    const ref = collection(this.fs, 'templates');
    return collectionData(ref, { idField: 'id' });
  }
}
