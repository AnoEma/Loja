import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Login } from './login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:2108/cadastro-usuario"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  logon(){
    console.log('Xuxa');
  }
}
