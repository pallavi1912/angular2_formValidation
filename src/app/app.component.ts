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
   public registrationForm = this._fb.group({
    email: ["", Validators.required],
    userName:["",Validators.pattern('[A-Za-z]{5}')],
    password: ["", Validators.required],
    retypePassword:[""]
  });
  ngOnInit(){
  console.log(this.registrationForm);
  }
  doRegister(event) {
    console.log(event);
    console.log(this.registrationForm.value);
  }
}
