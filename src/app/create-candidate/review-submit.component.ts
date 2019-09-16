import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class ReviewSubmitComponent implements OnInit {

  @Input() regForm: FormGroup;
  formSubmitted: boolean = false;

  @Input() firstName: string;

  reviewForm: FormGroup;
  firstNameInput: string;
  middleNameInput: string;
  lastNameInput: string;
  emailInput: string;
  phoneInput: string;

  constructor() {
    this.reviewForm = new FormGroup({
      firstNameReview:  new FormControl(null),
      middleNameReview: new FormControl(null),
      lastNameReview: new FormControl(null),
      emailReview: new FormControl(null),
      phoneReview: new FormControl(null)
    });
  }

  ngOnInit() {
      this.getAndPatchPersonalInfo();
      this.getAndPatchContact();
  }

  getAndPatchPersonalInfo() {
      this.regForm.get('personalInfo').valueChanges.subscribe((personalInfo) => {
          this.firstNameInput = personalInfo.firstName;
          console.log('First Name passed: ', this.firstNameInput);
          this.middleNameInput = personalInfo.middleName;
          this.lastNameInput = personalInfo.lastName;
          
          this.reviewForm.patchValue({
            firstNameReview: this.firstNameInput,
            middleNameReview: this.middleNameInput,
            lastNameReview: this.lastNameInput,
          });
      });
  }

  getAndPatchContact() {
    this.regForm.get('contact').valueChanges.subscribe((contact) => {
      this.emailInput = contact.email;
      this.phoneInput = contact.phone;

      this.reviewForm.patchValue({
        emailReview: this.emailInput,
        phoneReview: this.phoneInput
      });
    });
  }

  submit() {
    console.log('submitted');
    console.log(this.reviewForm.value);
    this.formSubmitted = true;
  }
}
