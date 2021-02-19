import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  value: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  validateCpf() {
    let unmaskedValue = this.value.replace(".", "").replace(".", "").replace("-", "");
    let response = this.apiService.validateCpf(unmaskedValue);
    console.log(response);
  }

}
