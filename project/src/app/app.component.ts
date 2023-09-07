import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CakeService } from './cake.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'project';
  constructor(private service:CakeService){
this.get()

  }
   
value=0
  

get(){

  this.service.getdb().subscribe((res:any)=>{
    this.value=res.length
    console.log(res.length,'length');
    
  });
}


}



