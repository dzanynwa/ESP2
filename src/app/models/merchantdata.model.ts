export interface MerchantData{
    id: number,
    service_provider_id: string,
    merchant_national_id: string,
    name: string,
    city: string,
    address: string,
    description: string,
    account_number: string,
    temp_account_number: string,
    fee_percentage: number,
    external_ref_id: string,
    picture: string,
    status: number, 
    created_at: string,
    updated_at: string
}