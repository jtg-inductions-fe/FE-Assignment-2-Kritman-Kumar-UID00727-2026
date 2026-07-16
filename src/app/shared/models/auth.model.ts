import { Id, Role } from '../types/user.type';

export interface AuthUser {
  id: Id;
  // name is optional for future perspective
  name?: string;
  email: string;
  password: string;
  role: Role;
}
