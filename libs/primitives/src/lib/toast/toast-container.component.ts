import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from './services/toast/toast.service';
import { Toast } from './models/toast-model';
import { Subscription } from 'rxjs';
import { ToastComponent } from './components/toast/toast.component';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { triggerChildAnimation } from './animations/trigger-child.animation';
import { verticalCollapseAnimation } from './animations/vertical-collapse.animation';

@Component({
  selector: 'd8-toast-container',
  standalone: true,
  imports: [CommonModule, ToastComponent],
  templateUrl: './toast-container.component.html',
  styleUrl: './toast-container.component.scss',
  animations: [
    trigger('slideIn', [
      state(
        '*',
        style({
          transform: 'translateY(0) scale(1) rotateY(0)',
          opacity: 1,
          filter: 'blur(0) saturate(100%)',
        })
      ),
      state(
        'void',
        style({
          transform: 'translateY(20px) scale(1.1) rotateY(5deg)',
          opacity: 0,
          filter: 'blur(2px) saturate(50%)',
        })
      ),
      transition('void => *', animate('.3s ease-in-out')),
    ]),
    trigger('slideOut', [
      state(
        '*',
        style({
          transform: 'translateX(0)  scale(1)',
          opacity: 1,
        })
      ),
      state(
        'void',
        style({
          transform: 'translateX(100%) scale(.7)',
          opacity: 0,
        })
      ),
      transition('* => void', animate('.2s ease')),
    ]),
    verticalCollapseAnimation,
    triggerChildAnimation,
  ],
})
export class ToastContainerComponent implements OnInit, OnDestroy {
  toasts: Toast[] = [];
  toastSubscription!: Subscription;

  constructor(public toast: ToastService) {}

  ngOnInit() {
    this.toastSubscription = this.toast.toast$.subscribe((toast) => {
      this.toasts = [toast, ...this.toasts];
      // setTimeout(() => this.toasts.pop(), toast.duration || 20000);
    });
  }

  remove(index: number) {
    this.toasts = this.toasts.filter((v, i) => i !== index);
  }

  ngOnDestroy(): void {
    this.toastSubscription.unsubscribe();
  }
}
