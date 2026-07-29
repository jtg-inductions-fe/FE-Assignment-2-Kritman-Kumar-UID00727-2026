import { USER_ROLE } from '../constants/enum';

export interface BaseUser {
  id: string;
  name?: string;
  email: string;
  profileImgUrl?: string;
}

export interface AuthUser extends BaseUser {
  password: string;
  role: USER_ROLE;
  restaurantId?: string;
}
