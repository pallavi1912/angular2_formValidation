import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) { }
   public loginForm = this._fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  ngOnInit(){
  console.log(this.loginForm);
  }
  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);
  }
}
