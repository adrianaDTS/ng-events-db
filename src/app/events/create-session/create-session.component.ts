import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Location } from '@angular/common';
import { ISession, restrictedWords } from "../shared/index";

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['../../user/login.component.scss', '../../user/profile.component.scss']

})

export class CreateSessionComponent {

  @Output() saveNewSession = new EventEmitter();
  @Output() cancelAddSession = new EventEmitter();
  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;


  constructor(private router: Router, private location: Location) { };

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });

  }

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

    this.saveNewSession.emit(session);
  }

  cancel() {
    this.cancelAddSession.emit()
  }
}