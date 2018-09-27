import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss'],
})
export class BasicDetailsComponent {
  model = {};

  basicInformationFormControllers = [
    {
      groupClass: 'col-md-4 mb-3',
      controllerType: 'text',
      controllerClass: 'form-control',
      controllerInvalidClass: 'is-invalid',
      controllerName: 'firstName',
      controllerModel: 'firstName',
      required: true,
      min: true,
      max: true,
      email: true,
      minLength: true,
      maxLength: true,
      pattern: '',
      requiredErrorMessage: '',
      minErrorMessage: '',
      maxErrorMessage: '',
      emailErrorMessage: '',
      minLengthErrorMessage: '',
      maxLengthErrorMessage: '',
      patternErrorMessage: '',
    },
  ];

  onSubmit(basicInformationForm) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}
