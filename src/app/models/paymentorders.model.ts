import { ShortUserProfile } from './shortuserprofile.model';

export interface PaymentOrders{
    id: number,
    from_account: string,
    to_account: string,
    from_profile_id: number,
    from_profile: ShortUserProfile,
    to_profile_id: number,
    to_profile: ShortUserProfile,
    currency: string,
    amount: string,
    status: number,
    description: string,
    created_at: string,
    updated_at: string
}