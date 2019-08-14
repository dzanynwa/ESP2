import { ShortUserProfile } from './shortuserprofile.model';

export interface PaymentRequests{
    id: number,
    account_id: number,
    from_profile_id: number,
    from_profile: ShortUserProfile,
    to_profile_id: number,
    to_profile: ShortUserProfile,
    account_number: string,
    currency: string,
    amount: string,
    status: number, 
    qr_code_id: string,
    message: string,
    response_message: string,
    created_at: string,
    updated_at: string
}