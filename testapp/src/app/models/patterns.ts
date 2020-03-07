export class Patterns {
    // tslint:disable-next-line: max-line-length
    static readonly email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    static readonly phone = /^(\+7)?\(?\d{3}\)?\d{3}-\d{2}-\d{2}$/gm;
}
