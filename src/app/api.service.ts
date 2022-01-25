import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http:HttpClient) { }

  //getting the data from the Json:
  getdata(){
    return this.http.get('https://d3mapper-project-default-rtdb.asia-southeast1.firebasedatabase.app/data.json')
  }
  postdata(data:any){  
    return this.http.post('https://d3mapper-project-default-rtdb.asia-southeast1.firebasedatabase.app/data.json',data)
  }
  postdata1(data:any){  
    return this.http.post('https://finaltestapp-c01a9-default-rtdb.asia-southeast1.firebasedatabase.app/.json',data)
  }
}
