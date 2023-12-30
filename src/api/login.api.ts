import { user, userAuth } from '../utils/fakeUserDB';
import { AuthUserModel, UserModel } from '../models/User.interface';

/**
 * Funcion para obtener usuarios
 * * Siempre regresa el mismo usuario 
 * * Delay 2s
 * @returns Promise<AuthUserModel>
 */
export const requestLogin = (data:AuthUserModel) : Promise<UserModel | null> => {
    return new Promise<UserModel>((resolve, reject)=>{
        if(data.password === userAuth.password && data.userName === userAuth.userName) {
            setTimeout(()=>{resolve(user)}, 2000);
            return;
        }
        setTimeout(()=>{reject(null)}, 1000);
    });
};