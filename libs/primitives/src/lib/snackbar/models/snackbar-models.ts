import {
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition,
} from '@angular/material/snack-bar';

export enum SnackbarState {
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
}

export interface SnackbarConfig {
  state: SnackbarState;
  message: string;
  icon?: string;
  action?: string;
  verticalPosition?: string;
  horizontalPosition?: string;
  duration?: number;
}

export const SnackbarConfig = ({
  state,
  message,
  action,
  icon,
  verticalPosition = 'top',
  horizontalPosition = 'right',
  duration = 1000,
}: SnackbarConfig) => ({
  duration: duration,
  data: { type: state, message, action, icon },
  panelClass: [`snackbar-${state}`],
  verticalPosition: verticalPosition as MatSnackBarVerticalPosition,
  horizontalPosition: horizontalPosition as MatSnackBarHorizontalPosition,
});
