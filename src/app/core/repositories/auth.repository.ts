import { AuthUser } from '@shared/models/auth.model';
import { Observable } from 'rxjs';

export abstract class AuthRepository {
  abstract login(email: string, password: string): Observable<AuthUser | null>;
}
