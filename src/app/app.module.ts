import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { PersonalInfoComponent } from './create-candidate/personal-info.component';
import { ContactComponent } from './create-candidate/contact.component';
import { JobComponent } from './create-candidate/job.component';
import { ReviewSubmitComponent } from './create-candidate/review-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCandidateComponent,
    PersonalInfoComponent,
    ContactComponent,
    JobComponent,
    ReviewSubmitComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
