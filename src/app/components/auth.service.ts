import { Router } from '@angular/router'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class AuthService {
  token: string | undefined
  username: string | undefined

  constructor(private router: Router) {}

  registerUser(email: string, password: string, username: string) {}

  signinUser(email: string, password: string) {}
  logout() {}
  getToken() {
    return this.token
  }
  isAunthenticated() {
    return this.token != null
  }
  getUserDetails() {
    return this.username
  }
}
