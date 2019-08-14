export interface UserAccount{
    id: number,
    service_provider_id: number,
    profile_id: number,
    account_display_number: string,
    account_currency: string,
    account_balance: string,
    friendly_name: string,
    created_at: string,
    updated_at: string,
    status: number
}