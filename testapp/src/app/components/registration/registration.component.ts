import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UIRouter } from '@uirouter/core';
import { Patterns } from 'src/app/models/patterns';
import { User } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends BaseComponent {
  form: FormGroup;
  hidePassword = true;

  constructor(private readonly userService: UserService,
              private readonly router: UIRouter,
              private readonly snackBar: MatSnackBar) {
    super();
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern(Patterns.email)]),
      phoneNumber: new FormControl('', [Validators.pattern(Patterns.phone)]),
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordConfirmation: new FormControl('', [ Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit() {
    const data = new User(this.form.value);
    if (!this.passwordConfirmationNotValid) {
      this.subscriptions.push(this.userService.regitstration(data).subscribe(() => {
        this.snackBar.open('Регистрация прошла успешно!', 'ОK', {
          duration: 2000
        });
        this.router.stateService.go('login');
      }));
    }
  }

  checkPasswordConfirmation() {
    if (this.passwordConfirmationNotValid) {
        this.form.controls.passwordConfirmation.setErrors({ notEquivalent: true });
    } else {
      this.form.controls.passwordConfirmation.setErrors(null);
    }
  }

  get passwordConfirmationNotValid() {
    return this.form.controls.password.value !== this.form.controls.passwordConfirmation.value &&
    this.form.controls.password.value.length && this.form.controls.passwordConfirmation.value.length;
  }
}
