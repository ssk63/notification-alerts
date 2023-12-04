import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { Toast } from '../../models/toast-model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toastSubject: BehaviorSubject<Toast>;
  toast$: Observable<Toast>;

  constructor() {
    this.toastSubject = new BehaviorSubject<Toast>(null!);
    this.toast$ = this.toastSubject
      .asObservable()
      .pipe(filter((toast) => toast !== null));
  }

  show(toast: Toast) {
    this.toastSubject.next(toast);
  }
}
