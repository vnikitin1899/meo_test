import { BaseModel } from './base.model';

export class LoginModel extends BaseModel<LoginModel> {
    login: string;
    password: string;
}
