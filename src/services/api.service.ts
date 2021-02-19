import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = 'cpf-cnpj-api/';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  async validateCpf(value: string) {
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      id: 1,
      value
    }
    await this.http.post(this.baseUrl + "postCpf", options)
      .subscribe((response: any) => {
        if (response.result.isValid) {
          this.toastr.success('Boa! Esse CPF não é fraudulento.', 'CPF validado com sucesso!');
        }
        else {
          this.toastr.warning('Opa! Talvez você possa estar sendo enganado.', 'CPF não validado com sucesso...');
        }
      })
  }
}
