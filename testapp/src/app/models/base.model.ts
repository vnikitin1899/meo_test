export class BaseModel<T> {
    constructor(value?: Partial<T>) {
        if (value) {
            Object.assign(this, value);
        }
    }
}
