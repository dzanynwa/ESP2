import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {environment} from "../../environments/environment"
import { Merchants } from "../models/merchants.model"

@Injectable({
  providedIn: 'root'
})
export class MerchantsService {

  constructor(private http: HttpClient) { }
  readonly BaseURI = environment.baseURI;
 
  getMerchants() {
    return this.http.get<Merchants[]>(this.BaseURI + '/merchants');
  }
}