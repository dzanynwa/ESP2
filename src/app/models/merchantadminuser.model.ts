export interface MerchantAdminUser{
    id: number,
    first_name: string,
    last_name: string,
    email: string, 
    status: number,
    last_login_at: string,
    password: string,
    creator_id: number,
    created_at: string,
    updated_at: string,
    merchant_id: number,
    service_provider_id: number
}