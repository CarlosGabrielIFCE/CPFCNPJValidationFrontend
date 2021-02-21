import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  totalValue: any;
  monthValue: any;
  actualDate = new Date();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let actualMonthNumber: number = this.actualDate.getMonth() + 1;
    let actualMonth = actualMonthNumber.toString();
    this.apiService.valuePayment().then((res: any) => {
      this.totalValue = res.paymentValue.toPrecision(3);
    });
    this.apiService.valuePayment(actualMonth).then((res: any) => {
      this.monthValue = res.paymentValue.toPrecision(3);
    })
  }



}
