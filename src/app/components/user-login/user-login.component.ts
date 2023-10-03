import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from '../../auth.service'
import { UserLogin } from 'src/app/interfaces/User-login'
import { ApiService } from 'src/app/api.service'
import { Router } from '@angular/router'
import { User } from 'src/app/interfaces/User'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  submit() {
    const formUser: User = {
      userName: this.form.get('userName')!.value,
      password: this.form.get('password')!.value,
    }
    this.auth.loginUser(formUser)
  }

  @Input() error: string | null | undefined

  @Output() submitEM = new EventEmitter()
}
