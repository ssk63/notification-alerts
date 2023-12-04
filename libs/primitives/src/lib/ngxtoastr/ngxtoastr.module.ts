import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrComponent } from './toastr/toastr.component';
import { NotificationService } from './service/notification.service';

@NgModule({
  declarations: [ToastrComponent],
  imports: [CommonModule],
  exports: [ToastrComponent],
  providers: [NotificationService],
})
export class NgxtoastrModule {}
