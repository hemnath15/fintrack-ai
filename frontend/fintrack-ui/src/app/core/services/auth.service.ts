import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environment/environment';

import { LoginRequest } from '../../models/auth/login-request';
import { LoginResponse } from '../../models/auth/login-response';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private tokenService = inject(TokenService);
  private http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/auth`;

  login(data: LoginRequest): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      data
    );

  }
  logout(): void {

    this.tokenService.removeToken();

}
storeToken(token: string): void {
  this.tokenService.saveToken(token);
}
getProfile() {
  return this.http.get(`${this.apiUrl}/profile`);
}
}