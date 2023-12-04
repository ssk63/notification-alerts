import { Component } from '@angular/core';
import {
  NgxtoastrModule,
  NotificationService,
  PrimitivesModule,
  SnackbarService,
  SnackbarState,
  ToastService,
  ToastType,
} from '@d8/libs/primitives';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  imports: [PrimitivesModule, MatButtonModule, NgxtoastrModule],
  selector: 'd8-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private toast: ToastService,
    private snackbarService: SnackbarService,
    private notificationService: NotificationService
  ) {}

  showSuccessToast() {
    this.toast.show({
      type: ToastType.Success,
      description: 'Test email sent successfully',
      actionLabel: 'VIEW ALL',
      duration: 1000,
    });
  }

  showErrorToast() {
    this.toast.show({
      type: ToastType.Error,
      title: 'Check it out!',
      description: 'This is a error alert',
    });
  }

  showWarningToast() {
    this.toast.show({
      type: ToastType.Warning,
      title: 'Check it out!',
      description: 'This is a warning alert',
      duration: 3000,
    });
  }

  showSuccessSnackbar() {
    this.snackbarService.openSnackbar({
      state: SnackbarState.Success,
      message: 'Test email sent successfully',
      action: 'Close',
      icon: 'done',
    });
  }

  showErrorSnackbar() {
    this.snackbarService.openSnackbar({
      state: SnackbarState.Error,
      message: 'Test email sent successfully',
      verticalPosition: 'bottom',
      action: 'Ok',
      icon: 'warning',
    });
  }

  showWarningSnackbar() {
    this.snackbarService.openSnackbar({
      state: SnackbarState.Warning,
      message: 'Test email sent successfully',
      verticalPosition: 'bottom',
      horizontalPosition: 'left',
      icon: 'warning',
    });
  }

  showSuccess() {
    this.notificationService.showSuccess('Hello world!', 'Toastr fun!', {
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      progressBar: false,
    });
  }

  showWarning() {
    this.notificationService.showWarning('Message sent!', '', {
      timeOut: 3000,
      positionClass: 'toast-top-left',
      progressBar: true,
    });
  }

  showError() {
    this.notificationService.showError('Message not sent');
  }
}
