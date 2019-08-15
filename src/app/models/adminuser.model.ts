import { AdminUserShort } from './adminusershort.model';

export interface AdminUser{
    id: number,
    first_name: string,
    last_name: string,
    email: string, 
    status: number,
    last_login_at: string,
    password: string, 
    creator_id: number,
    creator: AdminUserShort,
    created_at: string,
    updated_at: string
}