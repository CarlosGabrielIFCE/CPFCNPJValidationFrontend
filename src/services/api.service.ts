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
}
