import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerForm!: FormGroup
  fieldRequired: string = 'Este campo é obrigatório.'
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.createForm()
  }
  createForm() {
    let emailregex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.registerForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(emailregex)]),
      password: new FormControl(null, [Validators.required, this.checkPassword]),
    })
  }
  emaiErrors() {
    return this.registerForm.get('email')!.hasError('required')
      ? 'Este campo é obrigatório.'
      : this.registerForm.get('email')!.hasError('pattern')
      ? 'Este não é um endereço de e-mail válido'
      : ''
  }
  checkPassword(control: { value: any }) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/
    return !passwordCheck.test(enteredPassword) && enteredPassword ? { requirements: true } : null
  }
  getErrorPassword() {
    return this.registerForm.get('password')!.hasError('required')
      ? 'Este campo é obrigatório (A senha deve ter pelo menos seis caracteres, uma letra maiúscula e um número).'
      : this.registerForm.get('password')!.hasError('requirements')
      ? 'A senha precisa ter pelo menos seis caracteres, uma letra maiúscula e um número.'
      : ''
  }
  checkValidation(input: string) {
    const validation =
      this.registerForm.get(input)!.invalid &&
      (this.registerForm.get(input)!.dirty || this.registerForm.get(input)!.touched)
    return validation
  }
  onSubmit(formData: FormGroup, formDirective: FormGroupDirective): void {
    const email = formData.value.email
    const password = formData.value.password
    const username = formData.value.username
    this.auth.registerUser(email, password, username)
    formDirective.resetForm()
    this.registerForm.reset()
  }
}
