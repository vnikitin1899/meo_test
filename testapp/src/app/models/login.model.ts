export class LoginModel {
    login: string;
    password: string;

    constructor(value?: Partial<LoginModel>) {
        if (value) {
            Object.assign(this, value);
        }
    }
}
