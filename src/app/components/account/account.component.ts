import { Component, OnInit } from '@angular/core';
import {  tap } from 'rxjs';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent  implements OnInit{

  myData:any;
  myData$:any;
  data: any;
  jmbg:any;
  constructor(private myDataService : MyDataService) { }

  
  // ngOnInit(): void {            //prvi nacin
    
  //   this.myDataService.getDataFrom(this.jmbg)
  //     //.pipe(take(1))
  //     .subscribe((data) => {
  //     this.myData = data;
  //   });
  // }
  

  ngOnInit(): void {                                   //drugi nacin
    this.myData$ = this.myDataService.getDataFrom(this.jmbg)
    .pipe(tap((data) => (data = this.data)));
    
  }


getInfo(){
this.myData$ = this.myDataService.getInfoByJmbg(this.jmbg);

}
 

  
  // fnClick(){  
  //   this.myData$ = this.myDataService.getDataFrom(this.jmbg);
  //   console.log("rezultat: ", this.myData$);

  // }

  


}

