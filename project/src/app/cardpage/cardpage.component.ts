import { Component } from '@angular/core';
import { CakeService } from '../cake.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.css']
})
export class CardpageComponent {
constructor(private service:CakeService){
  this.get()
}
cakedata:any=[]
get(){
  this.service.getdb().subscribe((res:any)=>{
    console.log(res,'db store data');
  this.cakedata=res
  })
}

delete(id:any){
  this.service.deletedb(id).subscribe(res=>{

  })
  setTimeout(() => {
    this.get()
  }, 500);
}
}
