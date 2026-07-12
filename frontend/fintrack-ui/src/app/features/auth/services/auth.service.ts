import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../environment/environment';

import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { TokenService } from './token.service';
import { RegisterRequest } from '../models/register.model';

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
register(data: RegisterRequest) {

  return this.http.post<{

    success: boolean;

    message: string;

    data: any;

  }>(
    `${environment.apiUrl}/auth/register`,
    data
  );

}
}