import { AdminUser } from './adminuser.model';

export interface LoginResponseObject{
    token: string, 
    user: AdminUser
}