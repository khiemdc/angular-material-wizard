import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  candidateForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createCandidateForm();
    // const userName = this.candidateForm.controls['personalInfo'].value.firstName;
    // console.log('userName: ', userName);
  }

  createCandidateForm(): void {
    this.candidateForm = new FormGroup({
        'personalInfo': new FormGroup({
            'firstName': new FormControl(null, Validators.required),
            'middleName': new FormControl(null),
            'lastName': new FormControl(null, Validators.required)
            }),
        'contact': new FormGroup({
            'email': new FormControl(null),
            'phone': new FormControl(null)
            }),
        'job': new FormGroup({
            'functionalTitle': new FormControl(null)
        })
    });
  }

}
