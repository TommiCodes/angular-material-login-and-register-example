import { LOCALSTORAGE_TOKEN_KEY } from './../../../app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface RefreshToken {
  id: number;
  userId: number;
  token: string;
  refreshCount: number;
  expiryDate: Date;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: RefreshToken;
  tokenType: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {

}

export interface RegisterResponse {
  status: number;
  message: string;
}

export const fakeLoginResponse: LoginResponse = {
  // fakeAccessToken.....should all come from real backend
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  refreshToken: {
    id: 1,
    userId: 2,
    token: 'fakeRefreshToken...should al come from real backend',
    refreshCount: 2,
    expiryDate: new Date(),
  },
  tokenType: 'JWT'
}

export const fakeRegisterResponse: RegisterResponse = {
  status: 200,
  message: 'Register sucessfull.'
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtService: JwtHelperService
  ) { }

  /*
   Due to the '/api' the url will be rewritten by the proxy, e.g. to http://localhost:8080/api/auth/login
   this is specified in the src/proxy.conf.json
   the proxy.conf.json listens for /api and changes the target. You can also change this in the proxy.conf.json

   The `..of()..` can be removed if you have a real backend, at the moment, this is just a faked response
  */
  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return of(fakeLoginResponse).pipe(
      tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken))
    );
    // return this.http.post<LoginResponse>('/api/auth/login', loginRequest).pipe(
    // tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken))
    // );
  }

  /*
   The `..of()..` can be removed if you have a real backend, at the moment, this is just a faked response
  */
  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    // TODO
    return of(fakeRegisterResponse);
    // return this.http.post<RegisterResponse>('/api/auth/register', registerRequest);
  }

  /*
   Get the user fromt the token payload
   */
  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}
