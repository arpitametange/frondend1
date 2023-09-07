import { Component } from '@angular/core';
import { CakeService } from '../cake.service';

@Component({
  selector: 'app-cakepage',
  templateUrl: './cakepage.component.html',
  styleUrls: ['./cakepage.component.css']
})
export class CakepageComponent {
constructor(private service:CakeService){
this.get()
}
cakedata:any=[]
get(){
  this.service.getdata().subscribe((res:any)=>{
    console.log('cake data',res);
    this.cakedata=res
  })
}

add(image:any,title:any){
  var data={
    image:image,
    title:title
  }
this.service.postdata(data).subscribe(res=>{

})
// setTimeout(() => {
//   this.get()
// }, 500);
}
}
