export interface User {
  email: string;
  first_name: string;
  id: number;
  photo_url?: string;
  last_name: string;
  phone_number?: string;
  google_id_token?: string;
  google_id?: string;
  //is_2fa_enabled?: boolean
}
