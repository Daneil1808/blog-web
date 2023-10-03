import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value)
    }
  }
  @Input() error: string | null | undefined

  @Output() submitEM = new EventEmitter()
}
