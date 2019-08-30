class UserInfo {
    uniqueID: string;
    age: number;
    email: string;
    games: Array<string>;

    constructor(uuid: string, age: number, email: string) {
        this.uniqueID = uuid;
        this.age = age;
        this.email = email;
    }
}

export class User {
    username: string;
    password: string;
    userInfo: UserInfo;

    constructor(username: string, password: string, uuid: string, age: number, email: string) {
        this.username = username;
        this.password = password;
        this.userInfo = new UserInfo(uuid, age, email);
    }
}
