export class User {
    constructor(public email: string,
                public name: string,
                private password: string) {}

    matches(another: User):boolean{
        return another !== undefined &&
               another.email === this.email &&
               another.password === this.password
    }
}

export const users: {[key: string] : User} = {
    "abc@gmail.com" : new User("abc@gmail.com", 'abc', '123'),
    "def@gmail.com" : new User("def@gmail.com", 'def', '456')
}