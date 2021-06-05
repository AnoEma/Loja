import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = "http://localhost:2108/cadastro-usuario"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X',{
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  createUsuario(usuario: Usuario): Observable<Usuario>{
    usuario.dataCadastro = new Date();
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }
}
