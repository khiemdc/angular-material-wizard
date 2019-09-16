import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contactForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
