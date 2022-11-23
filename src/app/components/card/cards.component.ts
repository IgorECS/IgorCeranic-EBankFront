import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardList:any
  accountList$:any
  jmbg:any

  constructor(private http:HttpClient) { 
    this.cardList  = []
    this.accountList$ = []
    
  }

  ngOnInit(): void {
    this.getCardsList()
  }

  getCardsList(){
    return this.http.get('https://localhost:7067/Api/Account/getActiveCards').subscribe((result:any) =>
    {
       this.cardList = result
    })
  }


  // updateCard(updatedCardNumb: any,updatedBody: any){     

  //   var url = "https://localhost:7067/Api/Account/getActiveCards" + updatedCardNumb

  //   return this.http.put(url,updatedBody);
  
  // }







  // getAllByJMBG(jmbg:any){                                 
  //  return this.http.get(`https://localhost:7067/Api/Account/api/getAccount?embg=${jmbg}`).subscribe((datas:any) =>
  //  {
  //    this.accountList$ = datas
  // })
  // }



}
