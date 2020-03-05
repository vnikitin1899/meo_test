import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UIRouterModule, Ng2StateDeclaration } from '@uirouter/angular';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { AppPageComponent } from './components/app-page/app-page.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainComponent } from './components/main/main.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Ng2StateDeclaration[] = [
  { name: 'welcome', url: '', component: WelcomeComponent },
  { name: 'login', url: '/login', component: LoginComponent },
  { name: 'registration', url: '/registration', component: RegistrationComponent },
  { name: 'home', url: '/home', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AppPageComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent
  ],
  imports: [
    UIRouterModule.forRoot({ states: routes, useHash: false }),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
