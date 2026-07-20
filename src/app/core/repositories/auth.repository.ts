import { Observable } from 'rxjs';
import { AuthUser } from '@app/shared/models/auth.model';

export abstract class AuthRepository {
  abstract login(email: string, password: string): Observable<AuthUser | null>;
}
