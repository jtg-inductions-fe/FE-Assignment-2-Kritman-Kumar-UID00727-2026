import { Role } from '../types/user.type';

export interface BaseUser {
  id: string;
  name?: string;
  email: string;
  profileImgUrl?: string;
}

export interface AuthUser extends BaseUser {
  password: string;
  role: Role;
  restaurantId?: string;
}
