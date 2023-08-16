import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface langCofi {
  lang: string;
  code: string;
}

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css'],
})
export class PatientInfoComponent {
  public langs: langCofi[] = [
    { lang: 'english', code: 'en-Us' },
    { lang: 'german', code: 'jn-Us' },
    { lang: 'hind', code: 'hn-Us' },
    { lang: 'xly', code: 'xly-Us' },
  ];

  public singUpForm: FormGroup = new FormGroup({
    firstName: new FormControl('shiney', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
      Validators.maxLength(16),
    ]),
    lang: new FormControl(''),
  });

  ngOnInit() {}

  handleSubmit() {
    //alert('clicked')
  }
 
  //created gettter method to simply accessing control in html
  get forms() {
    return this.singUpForm.controls;
  }
}
