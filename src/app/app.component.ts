import { Component } from '@angular/core';
import api from 'src/api/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'challenge-itidigital-frontend';
  password = 'assets/password.png';
  passwordValue: string = '';
  result:any = '';
  color:any = '';

  passwordChange(newValue: any) {
    this.passwordValue = newValue.target.value;
  }
  validatePassword(value: string) {
    api
      .post('', {
        password: value,
      })
      .then(({ data }) => {
        if(data) {
          this.result = 'Senha válida';
          this.color = '#41D461';
        }}
      )
      .catch((error)=>{
        if(error.response.status === 401){
          this.result = 'Senha inválida';
          this.color = '#D44141';
        }
        console.log(error)
      })
    console.log(value);
    console.log(this.result);
  }
}
