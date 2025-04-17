import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SecondService } from './second.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-second',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent {
  public result = false;
  public cameraName = '';
  public cameraForm = new FormGroup({
    minLightLevel: new FormControl('0', Validators.required),
    maxLightLevel: new FormControl('250', Validators.required),
    minSubjectDistance: new FormControl('0', Validators.required),
    maxSubjectDistance: new FormControl('50', Validators.required),
  });

  constructor(private secondService: SecondService) {}

  onSubmit(): void {
    if (this.cameraForm.valid) {
      const output = this.secondService.checkCamera(
        this.cameraForm.controls.minLightLevel.value,
        this.cameraForm.controls.maxLightLevel.value,
        this.cameraForm.controls.minSubjectDistance.value,
        this.cameraForm.controls.maxSubjectDistance.value
      );
      this.result = output.result;
      this.cameraName = output.cameraName;
    }
  }
}
