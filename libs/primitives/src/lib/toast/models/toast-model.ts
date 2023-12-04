export interface Toast {
  type: ToastType;
  title?: string;
  description?: string;
  duration?: number;
  actionLabel?: string;
  position?: ToastPosition;
}

export enum ToastType {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}

export enum ToastPosition {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}
