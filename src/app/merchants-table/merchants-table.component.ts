import { Component, OnInit } from '@angular/core';
import { MerchantsService } from '../shared/merchants.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Merchants } from "../models/merchants.model"




@Component({
  selector: 'app-merchants-table',
  templateUrl: './merchants-table.component.html',
  styleUrls: ['./merchants-table.component.scss']
})
export class MerchantsTableComponent implements OnInit {
  
  dataSource = new MerchantsDataSource(this.service);
  displayedColumns = ['id', 'name', 'city', 'address', 'account_number']

  constructor(private service: MerchantsService) { }

  ngOnInit() {
    
  }
  
}

export class MerchantsDataSource extends DataSource<any> {
  constructor(private service: MerchantsService){
    super();
  }
  connect() : Observable<Merchants[]>{
    return this.service.getMerchants();
  }
  disconnect(){}
}