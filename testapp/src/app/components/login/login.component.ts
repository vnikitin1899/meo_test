import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BaseComponent } from '../base.component';
import { LoginModel } from 'src/app/models/login.model';
import { UserService } from 'src/app/services/user.service';
import { UIRouter } from '@uirouter/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent {
  form: FormGroup;
  hidePassword = true;

  constructor(private readonly userService: UserService,
              private readonly router: UIRouter) {
    super();
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    const data = new LoginModel(this.form.value);
    this.subscriptions.push(this.userService.login(data).subscribe(token => {
      localStorage.setItem('jwt', token);
      this.router.stateService.go('home');
    }));
  }
}
