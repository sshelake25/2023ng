import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    firstName: new FormControl('shiney'),
    lastName: new FormControl(''),
    email: new FormControl(""),
    password: new FormControl(""),
    lang: new FormControl("")
  });

  ngOnInit() {}
}
