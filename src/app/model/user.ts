export class User {
    username: string;
    password: string;
    userInfo: UserInfo;

    constructor(username: string, password: string, uuid: string, age: number) {
        this.username = username;
        this.password = password;
        this.userInfo.uniqueID = uuid;
        this.userInfo.age = age;
    }
}

export interface UserInfo {
    uniqueID: string;
    age: number;
    games: Array<string>;
}
