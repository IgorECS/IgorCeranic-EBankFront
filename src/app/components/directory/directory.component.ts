import { Component, OnInit } from '@angular/core';
import { DirectoryInfoModel } from 'src/app/models/directoryInfoModel';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  //title = 'users';
  users: DirectoryInfoModel[] = [];
  user: DirectoryInfoModel = {
    ime:``,
    prezime:``,
    jmbg:``,
    lk:``,
    adresa:``,
    mjesto:``,
    drzava:``,
    brTelefona:``,
    datumRodjenja:``,
    mjestoRodjenja:``,
    rezident:``

  }
    ime:any
    prezime:any
    jmbg:any
    lk:any
    adresa:any
    mjesto:any
    drzava:any
    brTelefona:any
    datumRodjenja:any
    mjestoRodjenja:any
    rezident:any


  constructor(private http:MyDataService ) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.getUserInfoFromDir();

  }

  getUserInfoFromDir(){
    this.http.getUserInfo().subscribe(
      response => {
        this.users = response;
        
      }
    );
  }

  // addNewUser(){
  //   this.http.createNewUser(this.user);


  // }

onSubmit(){
// console.log(this.user);

// if(this.user.jmbg ===''){
this.http.createNewUser(this.user).subscribe(
  response =>{
   this.getUserInfoFromDir();
   this.user = {
    
    ime:``,
    prezime:``,
    jmbg:``,
    lk:``,
    adresa:``,
    mjesto:``,
    drzava:``,
    brTelefona:``,
    datumRodjenja:``,
    mjestoRodjenja:``,
    rezident:``

   }
  }
)

// else{
//   this.updateUser(this.user);
// }

}

// getDirectoryByJmbg(jmbg:any){
//   this.http.getInfoByJmbg(jmbg).subscribe(
//     response => {
//       this.users = response;
      
//     }
//   );


// }

deleteUser(jmbg:string){
  this.http.deleteUser(jmbg).subscribe(
    response => {
      this.getUserInfoFromDir();
    }

  )
}

populateFields(user:DirectoryInfoModel){
  this.user = user;

}

updateUser(user:DirectoryInfoModel){
  this.http.updateUser(user).subscribe(
    response => {
      this.getUserInfoFromDir()
    }
  )
}

resetAllFields(){
  this.user.ime = '';
  this.user.prezime = '';
  this.user.adresa = '';
  this.user.brTelefona = '';
  this.user.datumRodjenja = '';
  this.user.drzava = '';
  this.user.jmbg = '';
  this.user.lk = '';
  this.user.mjesto = '';
  this.user.mjestoRodjenja = '';
  this.user.rezident = '';
}





}
