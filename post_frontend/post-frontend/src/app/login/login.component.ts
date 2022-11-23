import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private service: LoginService) {}
  user!: FormGroup;

  get email() {
    return this.user.get('email')!;
  }

  get password() {
    return this.user.get('password')!;
  }

  login() {
    this.service.login(this.user.value);
    this.user.reset();
    this.router.navigate(['/posts']);
  }

  viewPassword() {
    let view = document.getElementById('view-img')!;
    let inputTest = document.getElementById('input-password')!;
    if (inputTest.getAttribute('type') == 'password') {
      inputTest.setAttribute('type', 'text');
      view.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m13.271 11.146-1.292-1.292q.083-.792-.479-1.364-.562-.573-1.354-.49L8.854 6.708q.271-.104.563-.156Q9.708 6.5 10 6.5q1.458 0 2.479 1.021Q13.5 8.542 13.5 10q0 .292-.052.583-.052.292-.177.563Zm2.771 2.771-1.084-1.084q.75-.583 1.365-1.281T17.354 10q-1.021-2.104-3.01-3.302Q12.354 5.5 10 5.5q-.542 0-1.062.062-.521.063-1.021.209L6.708 4.562q.792-.312 1.615-.437T10 4q2.979 0 5.448 1.615Q17.917 7.229 19 10q-.458 1.188-1.219 2.156-.76.969-1.739 1.761ZM16 18.125l-2.708-2.708q-.792.291-1.615.437Q10.854 16 10 16q-2.979 0-5.448-1.615Q2.083 12.771 1 10q.458-1.188 1.208-2.167.75-.979 1.75-1.771L1.875 3.979l1.063-1.062 14.124 14.145ZM5.021 7.146q-.729.583-1.354 1.281-.625.698-1.021 1.573 1.021 2.104 3.01 3.302Q7.646 14.5 10 14.5q.542 0 1.062-.073.521-.073 1.042-.198l-.937-.937q-.292.104-.584.156-.291.052-.583.052-1.458 0-2.479-1.021Q6.5 11.458 6.5 10q0-.292.073-.583.073-.292.135-.584ZM11 9Zm-2 2Z"/></svg>';
    } else {
      inputTest.setAttribute('type', 'password');
      view.innerHTML =
        ' <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M10 13.5q1.458 0 2.479-1.021Q13.5 11.458 13.5 10q0-1.458-1.021-2.479Q11.458 6.5 10 6.5q-1.458 0-2.479 1.021Q6.5 8.542 6.5 10q0 1.458 1.021 2.479Q8.542 13.5 10 13.5Zm0-1.5q-.833 0-1.417-.583Q8 10.833 8 10q0-.833.583-1.417Q9.167 8 10 8q.833 0 1.417.583Q12 9.167 12 10q0 .833-.583 1.417Q10.833 12 10 12Zm0 4q-2.979 0-5.417-1.635Q2.146 12.729 1 10q1.146-2.729 3.583-4.365Q7.021 4 10 4q2.979 0 5.417 1.635Q17.854 7.271 19 10q-1.146 2.729-3.583 4.365Q12.979 16 10 16Zm0-6Zm0 4.5q2.333 0 4.312-1.208 1.98-1.209 3.042-3.292-1.062-2.083-3.042-3.292Q12.333 5.5 10 5.5T5.688 6.708Q3.708 7.917 2.646 10q1.062 2.083 3.042 3.292Q7.667 14.5 10 14.5Z"/></svg>';
    }
  }

  ngOnInit(): void {
    this.user = new FormGroup({
      email: new FormControl('', [
        Validators.required,

        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }
}
