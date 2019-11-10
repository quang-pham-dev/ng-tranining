import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RenewTokenResponse } from '../../models/model-responses/response-users/renew-token-response';
import { MOCK_API } from '../../constant/mock_api_contants';
import { CreateUserAuthRequest } from '../../models/model-requests/request-users/create-user-auth-request';
import { CreateUserAuthResponse } from '../../models/model-responses/response-users/create-user-auth-response';
import { UpdateUserAuthRequest } from '../../models/model-requests/request-users/update-user-auth-request';
import { UpdateUserAuthResponse } from '../../models/model-responses/response-users/update-user-response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  //
  createUserAuth(createUserAuthRequest: CreateUserAuthRequest): Observable<CreateUserAuthResponse> {
    return this.httpClient.post<CreateUserAuthResponse>(MOCK_API.I_10_CREATE_USER_AUTH, createUserAuthRequest);
  }
  //
  updateUserAuth(updateUserAuthRequest: UpdateUserAuthRequest): Observable<UpdateUserAuthResponse> {
    return this.httpClient.post<UpdateUserAuthResponse>(MOCK_API.I_10_CREATE_USER_AUTH, updateUserAuthRequest);
  }
  //
  renewToken(): Observable<RenewTokenResponse> {
    return this.httpClient.get<RenewTokenResponse>(MOCK_API.I_11_RENEWTOKEN);
  }
}
