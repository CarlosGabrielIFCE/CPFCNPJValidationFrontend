import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { rejects } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'https://stark-tor-87979.herokuapp.com/';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  async validateCpf(value: string) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      value,
      description: "CPF Requisitado pelo Frontend"
    }
    await this.http.post(this.baseUrl + "api/customers/3/solicitations", options)
      .subscribe((response: any) => {
        if (response.valid) {
          this.toastr.success('Boa! Esse CPF/CNPJ não é fraudulento.', 'CPF/CNPJ validado com sucesso!');
        }
        else {
          this.toastr.warning('Opa! Talvez você possa estar sendo enganado.', 'CPF/CNPJ não validado com sucesso...');
        }
      })
  }

  valuePayment(value?: string) {
    return new Promise((resolve) => {
      let url = value ? `api/customers/3/payment/${value}` : `api/customers/3/payment`;
      this.http.get(this.baseUrl + url)
        .subscribe((response) => {
          resolve(response);
        })
    });
  }
}
