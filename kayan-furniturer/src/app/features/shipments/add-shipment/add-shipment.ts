import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-shipment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './add-shipment.html',
  styleUrl: './add-shipment.scss',
})
export class AddShipment {
  currentStep = signal(1);

  nextStep() {
    if (this.currentStep() < 3) {
      this.currentStep.update(s => s + 1);
    }
  }

  prevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
    }
  }

  setStep(step: number) {
    this.currentStep.set(step);
  }
}
