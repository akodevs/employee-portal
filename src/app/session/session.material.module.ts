import {
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatTooltipModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatSnackBarModule,
  MatMenuModule,
} from '@angular/material'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
  ],
})
export class SessionMaterialModule {}
