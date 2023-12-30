export interface AuthUserModel {
    userName: string;
    password: string;
}

export interface UserModel extends Pick<AuthUserModel, 'userName'> {
    firstName: string;
    lastName: string;
    email: string;
}