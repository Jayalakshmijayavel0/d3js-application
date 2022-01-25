import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {    


  constructor () {}
 
 ngOnInit(){  }
 
  d1=false;
  d2=false
  c1(){this.d1=true,this.d2=false}
  c2(){this.d2=true,this.d1=false}

}

