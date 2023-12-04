import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastContainerComponent } from './toast/toast-container.component';
import { ToastService } from './toast/services/toast/toast.service';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SnackbarService } from './snackbar/services/snackbar.service';

@NgModule({
  imports: [CommonModule, ToastContainerComponent, SnackbarComponent],
  providers: [ToastService, SnackbarService],
  exports: [ToastContainerComponent, SnackbarComponent],
})
export class PrimitivesModule {}
