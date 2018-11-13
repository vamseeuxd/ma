import {Component} from '@angular/core';

@Component({
  selector: 'ngx-ma-dynamic-form',
  templateUrl: './ma-dynamic-form.component.html',
  styleUrls: ['./ma-dynamic-form.component.scss'],
})
export class MaDynamicFormComponent {

  model = {};

  inputTypeOne = [
    'color',
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'range',
    'search',
    'tel',
    'time',
    'url',
    'week',
  ];

  /*{
    groupClass: 'col-md-4 mb-3',
    controllerType: 'text',
    controllerClass: 'form-control',
    controllerInvalidClass: 'is-invalid border border-danger',
    controllerName: 'textInput',
    controllerLabel: 'Text Input',
    controllerModel: 'textInput',
    required: true,
    min: 3,
    max: 10,
    minLength: 3,
    maxLength: 10,
    pattern: '',
    requiredErrorMessage: 'First Name is required',
    minErrorMessage: 'Minimum Value should be 3',
    maxErrorMessage: 'Maximum Value should be 10',
    emailErrorMessage: 'Provide valid email Address',
    minLengthErrorMessage: 'Maximum 10 Characters are required',
    maxLengthErrorMessage: 'Minimum 03 Characters are required',
    patternErrorMessage: 'First Name should be in XX-XXXXXX Pattern',
  }*/

  formControllers: any[] = [
    {
      groupClass: 'col-md-4 mb-3',
      controllerType: 'text',
      controllerClass: 'form-control',
      controllerInvalidClass: 'is-invalid border border-danger',
      controllerName: 'textInput',
      controllerLabel: 'Text Input',
      controllerPlaceholder: 'Text Input',
      controllerModel: 'textInput',
      required: true,
      minLength: 3,
      maxLength: 10,
      requiredErrorMessage: 'Text Input is required',
      minLengthErrorMessage: 'Minimum 03 Characters are required',
      maxLengthErrorMessage: 'Maximum 10 Characters are required',
      getComponentClass: (form, component) => {
        if (form.submitted && form['controls'][component.controllerName].invalid) {
          return component.controllerClass + ' ' + component.controllerInvalidClass;
        } else {
          return component.controllerClass;
        }
      },
    },
    {
      groupClass: 'col-md-4 mb-3',
      controllerType: 'number',
      controllerClass: 'form-control',
      controllerInvalidClass: 'is-invalid border border-danger',
      controllerName: 'numberInput',
      controllerPlaceholder: 'Number Input',
      controllerLabel: 'Number Input',
      controllerModel: 'number',
      required: true,
      min: 3,
      max: 10,
      requiredErrorMessage: 'Number Input is required',
      minErrorMessage: 'Minimum Value should be 3',
      maxErrorMessage: 'Maximum Value should be 10',
      getComponentClass: (form, component) => {
        if (form.submitted && form['controls'][component.controllerName].invalid) {
          return component.controllerClass + ' ' + component.controllerInvalidClass;
        } else {
          return component.controllerClass;
        }
      },
    },
    {
      groupClass: 'col-md-4 mb-3',
      controllerType: 'text',
      controllerClass: 'form-control',
      controllerInvalidClass: 'is-invalid border border-danger',
      controllerName: 'patternInput',
      controllerPlaceholder: 'Provide Three letter country code',
      controllerLabel: 'Pattern Input',
      controllerModel: 'pattern',
      pattern: '[A-Za-z]{3}',
      required: true,
      requiredErrorMessage: 'Pattern Input is required',
      patternErrorMessage: 'Provide Three letter country code',
      getComponentClass: (form, component) => {
        if (form.submitted && form['controls'][component.controllerName].invalid) {
          return component.controllerClass + ' ' + component.controllerInvalidClass;
        } else {
          return component.controllerClass;
        }
      },
    },
    {
      groupClass: 'col-md-4 mb-3',
      controllerType: 'date',
      controllerClass: 'form-control',
      controllerInvalidClass: 'is-invalid border border-danger',
      controllerName: 'numberInput',
      controllerPlaceholder: 'Date Input',
      controllerLabel: 'Date Input',
      controllerModel: 'date',
      required: true,
      min: '2018-09-05',
      max: '2018-09-10',
      requiredErrorMessage: 'Date Input is required',
      minErrorMessage: 'Minimum Date should be 2018-09-05',
      maxErrorMessage: 'Maximum Date should be 2018-09-10',
      getComponentClass: (form, component) => {
        if (form.submitted && form['controls'][component.controllerName].invalid) {
          return component.controllerClass + ' ' + component.controllerInvalidClass;
        } else {
          return component.controllerClass;
        }
      },
    },
  ];

  constructor() {
    this.formControllers = [];
    this.addDummyInputTypeOne();

  }

  addDummyInputTypeOne() {
    this.inputTypeOne.forEach(input => {
      const newInput = {
        groupClass: 'col-md-4 mb-3',
        controllerType: input,
        controllerClass: 'form-control',
        controllerInvalidClass: 'is-invalid border border-danger',
        controllerName: input + 'Input',
        controllerLabel: input + ' Input',
        controllerPlaceholder: input + ' Input',
        controllerModel: input + 'Model',
        isCustomMessage: false,
        customMessageClass: 'invalid-feedback',
        customMessage: '',
        requiredErrorMessage: input + ' Input is required',
        change: (form, component) => {
        },
        getComponentClass: (form, component, model) => {
          if (form.submitted && form['controls'][component.controllerName].invalid) {
            return component.controllerClass + ' ' + component.controllerInvalidClass;
          } else {
            return component.controllerClass;
          }
        },
        required: true,
        min: 3,
        max: 10,
        minLength: 3,
        maxLength: 10,
        pattern: '',
        minErrorMessage: 'Minimum Value should be 3',
        maxErrorMessage: 'Maximum Value should be 10',
        emailErrorMessage: 'Provide valid email Address',
        maxLengthErrorMessage: 'Maximum 10 Characters are required',
        minLengthErrorMessage: 'Minimum 03 Characters are required',
        patternErrorMessage: 'First Name should be in XX-XXXXXX Pattern',
      };
      this.formControllers.push(newInput);
    });
    this.addDummySelectInput();
  }

  addDummySelectInput() {
    const newInput = {
      groupClass: 'col-md-4 mb-3',
      controllerType: 'select',
      controllerClass: 'form-control',
      controllerInvalidClass: 'is-invalid border border-danger',
      controllerName: 'selectInput',
      controllerLabel: 'select' + ' Input',
      controllerPlaceholder: 'select' + ' Input',
      controllerModel: 'select' + 'Model',
      required: true,
      isCustomMessage: false,
      customMessageClass: 'text-danger',
      customMessage: '',
      requiredErrorMessage: 'select' + ' Input is required',
      getComponentClass: (form, component, model) => {
        if (form.submitted && form['controls'][component.controllerName].invalid) {
          return component.controllerClass + ' ' + component.controllerInvalidClass;
        } else {
          return component.controllerClass;
        }
      },
      change: (form, component, model) => {

        component.isCustomMessage = false;
        component.customMessage = '';
        component.controllerClass = 'form-control';

        if (form.submitted) {
          if (model[component.controllerModel] === '0') {
            component.isCustomMessage = true;
            component.customMessage = 'Custom Message border-danger ';
            component.controllerClass = 'form-control text-danger border-danger';
          }
        }
      },
      data: [
        {label: 'Select Option', id: '0'},
        {label: 'Option 1', id: '1'},
        {label: 'Option 2', id: '2'},
        {label: 'Option 3', id: '3'},
        {label: 'Option 4', id: '4'},
        {label: 'Option 5', id: '5'},
      ],
    };
    this.formControllers.push(newInput);
    this.addDummyCheckInput();
  }

  addDummyCheckInput() {
    const newInput = {
      groupClass: 'col-md-4 mb-3 form-group',
      controllerType: 'checkbox',
      controllerClass: 'form-control',
      controllerInvalidClass: 'is-invalid border border-danger',
      controllerName: 'selectInput',
      controllerLabel: 'Check Box' + ' Input',
      controllerPlaceholder: 'Check Box' + ' Input',
      controllerModel: 'checkbox' + 'Model',
      required: true,
      isCustomMessage: false,
      customMessageClass: 'text-danger',
      customMessage: '',
      requiredErrorMessage: 'Check Box' + ' Input is required',
      getComponentClass: (form, component, model) => {
        if (form.submitted && form['controls'][component.controllerName].invalid) {
          return component.controllerClass + ' ' + component.controllerInvalidClass;
        } else {
          return component.controllerClass;
        }
      },
      change: (form, component, model) => {

        component.isCustomMessage = false;
        component.customMessage = '';
        component.controllerClass = 'form-control';

        if (form.submitted) {
          if (model[component.controllerModel] === '0') {
            component.isCustomMessage = true;
            component.customMessage = 'Custom Message border-danger ';
            component.controllerClass = 'form-control text-danger border-danger';
          }
        }
      },
      data: [
        {label: 'Option 1', id: '1'},
        {label: 'Option 2', id: '2'},
        {label: 'Option 3', id: '3'},
        {label: 'Option 4', id: '4'},
        {label: 'Option 5', id: '5'},
      ],
    };
    this.formControllers.push(newInput);
  }

  onSubmit(basicInformationForm) {
    // console.log(basicInformationForm.controls.selectInput.errors);
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }

  onCheckBoxChange(model, modelName, id) {
    // model[component.controllerModel] = option.id
    // model[modelName] = option.id
    if (model[modelName]) {
      if (model[modelName].indexOf(id) >= 0) {
        const _index = model[modelName].indexOf(id);
        model[modelName].splice(_index, 1);
      } else {
        model[modelName].push(id);
      }
    } else {
      model[modelName] = [];
      model[modelName].push(id);
    }
  }
}
