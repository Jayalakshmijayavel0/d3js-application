import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {
  contactform!: FormGroup;

  constructor(private formBuilder:FormBuilder,
    private api:ApiService) {}

  ngOnInit(){   
    this.contactform =this.formBuilder.group({
      username:['',Validators.required],
      message:['',Validators.required]
    }); 
    
  }

  submit(){
     let save = this.contactform.value
    this.api.postdata1(save).subscribe()
    this.contactform.reset()}
  register(){this.contactform.reset()}
}
