import { BaseModel } from './base.model';

export class User extends BaseModel<User> {
    fullName: string;
    email: string;
    phoneNumber: string;
    login: string;
    password: string;
    passwordConfirmation: string;
}
