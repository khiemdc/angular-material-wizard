import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class PersonalInfoComponent implements OnInit {
  @Input() personalForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  personalInforSubmitted() {
    this.personalForm.get('personalInfo').get('firstname');
    this.personalForm.get('personalInfo').get('lastname');
  }
}
