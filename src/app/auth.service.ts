import { ApiService } from 'src/app/api.service'
import { Injectable } from '@angular/core'
import { User } from './interfaces/User'
import { UserLogin } from './interfaces/User-login'
import { Router } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  registerUser(user: User) {
    this.apiService.postUser(user).subscribe(
      (response) => {
        console.log('Usuário criado com sucesso:', response.token)
      },
      (error) => {
        console.error('Erro ao criar usuário:', error)
      },
    )
  }

  loginUser(user: UserLogin) {
    this.apiService.loginUser(user).subscribe(
      () => {
        this.router.navigate(['/home'])
      },
      (error) => {
        console.error('Erro ao logar:', error)
      },
    )
  }
}
