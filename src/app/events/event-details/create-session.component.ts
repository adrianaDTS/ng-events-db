import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from "../shared/index";

@Component({
  templateUrl: './create-session.component.html',
  styleUrls: ['../../user/login.component.scss', '../../user/profile.component.scss']
})

export class CreateSessionComponent {
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;



  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });

  }

  // custom validator (function) for abstrac's textarea
  private restrictedWords(words) {
    return (control: FormControl): { [key: string]: any; } => {

      if (!words) return null;

      let invalidWords = words
        .map(word => control.value.includes(word) ? word : null)
        .filter(word => word != null);
      return invalidWords && invalidWords.length > 0 ? { 'restrictedWord': invalidWords.join(',') } : null;
    };
  };

  saveSession(formValues) {
    let session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };

    console.log(session);
  }
}