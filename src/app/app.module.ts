import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/cards.component';
import { AccountComponent } from './components/account/account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DirectoryComponent } from './components/directory/directory.component';
import { MatTabsModule } from '@angular/material';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { CurrentAccountComponent } from './components/current-account/current-account.component';
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    CardComponent,
    DirectoryComponent,
    AccountComponent,
    TransactionComponent,
    ReservationComponent,
    CurrentAccountComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
  ],
})
export class AppModule {}
