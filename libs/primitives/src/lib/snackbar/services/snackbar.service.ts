import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar.component';
import { SnackbarConfig } from '../models/snackbar-models';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackbar(snackbarData: SnackbarConfig) {
    this.snackBar.openFromComponent(
      SnackbarComponent,
      SnackbarConfig(snackbarData)
    );
  }
}
