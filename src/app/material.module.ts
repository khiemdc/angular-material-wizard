import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatGridListModule,
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatStepperModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatCardModule
  ],
  exports: [
    Material.MatGridListModule,
    Material.MatToolbarModule,
    Material.MatFormFieldModule,
    Material.MatStepperModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
