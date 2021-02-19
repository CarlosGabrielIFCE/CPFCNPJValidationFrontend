import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  value: string;
  isCnpj: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  validateCpf() {
    let unmaskedValue = this.value.replace(".", "").replace(".", "").replace("-", "");
    let response = this.apiService.validateCpf(unmaskedValue);
    console.log(response);
  }

  isCPF(): boolean{
    return this.value == null ? true : this.value.length < 12 ? true : false;
 }

 getCpfCnpjMask(): string{
    return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
 }

}
