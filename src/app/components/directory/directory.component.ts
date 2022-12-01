import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DirectoryInfoModel } from 'src/app/models/directoryInfoModel';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  //title = 'users';
  users1: any;
  users: DirectoryInfoModel[] = [];
  user: DirectoryInfoModel = {
    ime: ``,
    prezime: ``,
    jmbg: ``,
    lk: ``,
    adresa: ``,
    mjesto: ``,
    drzava: ``,
    brTelefona: ``,
    datumRodjenja: ``,
    mjestoRodjenja: ``,
    rezident: ``,
  };
  ime: any;
  prezime: any;
  jmbg: any;
  lk: any;
  adresa: any;
  mjesto: any;
  drzava: any;
  brTelefona: any;
  datumRodjenja: any;
  mjestoRodjenja: any;
  rezident: any;

  tab1: any;
  tab2: any;

  brojRac: any;
  tekuciRacuni: any[] = [];
  kliknutiRacun: any;

  // editForm = new FormGroup({
  //   ime: new FormControl('', Validators.required),
  //   prezime: new FormControl('', Validators.required),
  //   // jmbg: new FormControl('',Validators.required,Validators.minLength,)
  // });

  getThisAccount() {
    this.http.getThisAccount().subscribe((response) => {
      this.tekuciRacuni = response;
    });
  }

  changeTabToFirst(): void {
    this.tab1 = true;
    this.tab2 = false;
  }

  changeTabToSeccond(): void {
    this.tab1 = false;
    this.tab2 = true;
  }

  constructor(private http: MyDataService) {
    this.users = [];
    // this.users1 = [];
  }

  ngOnInit(): void {
    this.getUserInfoFromDir();
    this.getDirectoryByJmbg(this.jmbg);
  }

  getUserInfoFromDir() {
    this.http.getUserInfo().subscribe((response) => {
      this.users = response;
    });
  }

  // }

  onSubmit() {
    // console.log(this.user);

    // if(this.user.jmbg ===''){
    this.http.createNewUser(this.user).subscribe((response) => {
      this.getUserInfoFromDir();
      this.user = {
        ime: ``,
        prezime: ``,
        jmbg: ``,
        lk: ``,
        adresa: ``,
        mjesto: ``,
        drzava: ``,
        brTelefona: ``,
        datumRodjenja: ``,
        mjestoRodjenja: ``,
        rezident: ``,
      };
    });

    // else{
    //   this.updateUser(this.user);
    // }
  }

  getDirectoryByJmbg(jmbg: any) {
    this.http.getInfoByJmbg(jmbg).subscribe((response) => {
      this.users1 = response;
    });
  }

  deleteUser(jmbg: string) {
    this.http.deleteUser(jmbg).subscribe((response) => {
      this.getUserInfoFromDir();
    });
  }

  populateFields(user: DirectoryInfoModel) {
    this.user = user;
  }

  updateUser(user: DirectoryInfoModel) {
    this.http.updateUser(user).subscribe((response) => {
      this.getUserInfoFromDir();
    });
  }

  resetAllFields() {
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
