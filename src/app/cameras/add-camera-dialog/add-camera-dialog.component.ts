import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Camera from '../models/camera';

interface FormValue {
  name: string;
  lat: number;
  lon: number;
}

@Component({
  selector: 'app-add-camera-dialog',
  styleUrls: ['./add-camera-dialog.component.scss'],
  template: `
    <form novalidate [formGroup]="form" (ngSubmit)="ok()">
      <div class="dialog-content-wrapper" mat-dialog-content>
        <h1 mat-dialog-title>Add a new camera</h1>
        <mat-form-field>
          <input matInput placeholder="Name" formControlName="name">
          <mat-error *ngIf="form.get('name').errors?.required">Field is required</mat-error>
          <mat-error *ngIf="form.get('name').errors?.minlength || form.get('name').errors?.maxlength">Field length is invalid</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input matInput type="number" placeholder="Latitude" formControlName="lat">
          <mat-error *ngIf="form.get('lat').errors?.required">Field is required</mat-error>
          <mat-error *ngIf="form.get('lat').errors?.min || form.get('lat').errors?.max">Value is out of bounds</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input matInput type="number" placeholder="Longitude" formControlName="lon">
          <mat-error *ngIf="form.get('lon').errors?.required">Field is required</mat-error>
          <mat-error *ngIf="form.get('lon').errors?.min || form.get('lon').errors?.max">Value is out of bounds</mat-error>
        </mat-form-field>
      </div>
      <div class="dialog-actions-wrapper" mat-dialog-actions>
        <button mat-raised-button (click)="cancel()">Cancel</button>
        <button type="submit" mat-raised-button color="primary" [disabled]="!form.valid">Ok</button>
      </div>
    </form>
  `
})
export class AddCameraDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCameraDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lat: [null, [Validators.required, Validators.min(-90), Validators.max(90)]],
      lon: [null, [Validators.required, Validators.min(-180), Validators.max(180)]],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  ok() {
    const { name, lat, lon } = this.form.getRawValue() as FormValue;
    if (!this.form.valid) {
      return this.cancel();
    }
    const camera = new Camera(name, { lat, lon });
    this.dialogRef.close(camera);
  }

}
