import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title?: string, toastConfig?: any) {
    this.toastr.success(message, title, toastConfig);
  }

  showError(message: string, title?: string, toastConfig?: any) {
    this.toastr.error(message, title, toastConfig);
  }

  showInfo(message: string, title?: string, toastConfig?: any) {
    this.toastr.info(message, title, toastConfig);
  }

  showWarning(message: string, title?: string, toastConfig?: any) {
    this.toastr.warning(message, title, toastConfig);
  }

  hideToast(toastId: number) {
    this.toastr.remove(toastId);
  }

  hideAllToasts() {
    this.toastr.clear();
  }
}
