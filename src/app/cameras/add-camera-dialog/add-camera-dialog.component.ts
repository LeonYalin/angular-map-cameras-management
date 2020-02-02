import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Camera from '../models/camera';
import { MIN_LAT, MAX_LAT, MIN_LON, MAX_LON } from 'src/app/dashboard/dashboard.constants';

interface FormValue {
  name: string;
  lat: number;
  lon: number;
}

@Component({
  selector: 'app-add-camera-dialog',
  styleUrls: ['./add-camera-dialog.component.scss'],
  templateUrl: './add-camera-dialog.component.html',
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
      lat: [null, [Validators.required, Validators.min(MIN_LAT), Validators.max(MAX_LAT)]],
      lon: [null, [Validators.required, Validators.min(MIN_LON), Validators.max(MAX_LON)]],
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
