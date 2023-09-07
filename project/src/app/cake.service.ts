import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

   url= 'https://the-birthday-cake-db.p.rapidapi.com/'
postINdB='http://localhost:3000/data/post'
getFromdB='http://localhost:3000/data/get'
// url=''
deletefromdb='http://localhost:3000/data/delete'
  

  constructor(private http:HttpClient) { }

 header =  new HttpHeaders({
  'X-RapidAPI-Key': '8f05052940msh70ccb18415bd58ap114f8djsnb5237e4ffdd3',
  'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
     })

    

     ///cake api data
     getdata(){
     return this.http.get(this.url,{headers:this.header})
     }


     ///mongodb curd
     postdata(body:any){
      return this.http.post(this.postINdB,body)
     }
     getdb(){
      return this.http.get(this.getFromdB)
     }

     deletedb(id:number):Observable<any>{
      return this.http.delete(`${this.deletefromdb}/${id}`)
     }
}
