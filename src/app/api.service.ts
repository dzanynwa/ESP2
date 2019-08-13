import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: 'virtserver.swaggerhub.com/haris.ceco/ZingApiV2/1.0.0/'

  constructor(private httpClient: HttpClient) { }

  login(email, password, otp) {
    this.httpClient.post(this.api + "sp/admins/login",
      {
        "email": email,
        "password": password,
        "otp": otp
      })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }
}
