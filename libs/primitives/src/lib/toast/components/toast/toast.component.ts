import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Toast } from '../../models/toast-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'd8-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  @Input() toast!: Toast;
  @Input() index!: number;

  @Output() remove = new EventEmitter<number>();
}
