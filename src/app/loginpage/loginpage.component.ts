import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginform!: FormGroup;
  invalidLogin:boolean =false
  login: any;
  message: any;
  cre ='INVALID CREDENTATILES';
  userid: any;
  pwd: any;
  show=false;
  datalist: any=[];
  postarray: any;
    constructor(  private formBuilder:FormBuilder,
                  private router:Router,
                  private api:ApiService,
                  ) { }

  ngOnInit(){
    this.loginform =this.formBuilder.group({
      userid:['',Validators.required],
      pwd:['',Validators.required]
    }); 
    this.api.getdata().pipe(map((responsedata: any)=>{const postarray =[]; for (const key in responsedata){if (responsedata.hasOwnProperty(key)){postarray.push({...responsedata[key],id:key});}}
  return postarray;
  })).subscribe((res:any)=>{this.postarray = res})}

  register(){ this.router.navigate(["signuppage"]) }
  
  onsubmit(){
    
    this.postarray.forEach((res: any) => {

      if(this.loginform.controls['userid'].value == res.accountnumber ){
        if(this.loginform.controls['pwd'].value == res.password){
          this.router.navigate(['sidenav']);
           this.show=false;
        }
      }
      else{
        this.show=true
      }
    });
  }
}



