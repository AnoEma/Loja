import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { Usuario } from './usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario = {
    nome: "Arnoboys",
    cpf: "239073018"
  }
  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {

  }

  createUsuario(): void {
    this.registerService.createUsuario(this.usuario).subscribe(() => {
      this.registerService.showMessage('Cadastro realizado com sucesso')
      this.router.navigate(['/']);
    })
  }


  VoltarAoInicio(): void {
    this.router.navigate(['/']);
  }
}