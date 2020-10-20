import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  drawer$: BehaviorSubject<boolean>;
  constructor() {
    this.drawer$ = new BehaviorSubject<boolean>(false);
  }
}
