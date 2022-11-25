import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyDataService } from 'src/app/services/my-data.service';

@Component({
  selector: 'app-current-account',
  templateUrl: './current-account.component.html',
  styleUrls: ['./current-account.component.css'],
})
export class CurrentAccountComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
