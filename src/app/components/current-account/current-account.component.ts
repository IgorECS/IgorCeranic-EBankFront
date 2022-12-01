import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/models/accountModel';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-current-account',
  templateUrl: './current-account.component.html',
  styleUrls: ['./current-account.component.css'],
})
export class CurrentAccountComponent implements OnInit {
  racun: any;
  accounts: AccountModel[] = [];
  account: AccountModel = {
    stanje: ``,
    brojRac: ``,
    partija: ``,
    datumOtvaranja: ``,
    datumPolsednjeUplate: ``,
    kamata: ``,
    iznosPoslednjePlate: ``,
    datumPoslednjePlate: ``,
  };

  brojRac: any;
  tekuciRacuni: any[] = [];
  kliknutiRacun: any;
  kartice: any[] = [];
  transactions: any[] = [];
  reservations: any[] = [];

  tabCards: any;
  tabTransactions: any;
  tabReservations: any;

  constructor(private http: MyDataService) {
    // this.accounts = [];
    this.tekuciRacuni = [];
  }

  ngOnInit(): void {
    this.getThisAccount();
    this.getAllDataFromBe();
  }

  getAllDataFromBe() {
    this.http.getAllData().subscribe((response: any) => {
      this.tekuciRacuni = response;
    });
  }

  showCards(cards: any) {
    this.kartice = cards;
    // this.transactions = [];
    // this.reservations = [];
    this.tabCards = true;
    this.tabReservations = false;
    this.tabTransactions = false;
  }
  showTransactions(transactions: any) {
    this.transactions = transactions;
    // this.kartice = [];
    // this.reservations = [];
    this.tabCards = false;
    this.tabReservations = false;
    this.tabTransactions = true;
  }
  showReservations(reservations: any) {
    this.reservations = reservations;
    // this.kartice = [];
    // this.transactions = [];
    this.tabCards = false;
    this.tabReservations = true;
    this.tabTransactions = false;
  }

  getThisAccount() {
    this.http.getThisAccount().subscribe((response) => {
      this.accounts = response;
    });
  }

  changeTab(brRacuna: any): void {
    this.brojRac = brRacuna;
    for (let i = 0; i < this.tekuciRacuni.length; i++) {
      if (this.tekuciRacuni[i].brojRac == brRacuna) {
        this.kliknutiRacun = this.tekuciRacuni[i];
      }
    }
  }
}
