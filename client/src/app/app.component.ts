import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from './shared/models/IProduct';
import {IPagination} from './shared/models/IPagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor() { }

  ngOnInit(): void {

  }
}
