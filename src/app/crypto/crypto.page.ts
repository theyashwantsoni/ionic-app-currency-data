import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.page.html',
  styleUrls: ['./crypto.page.scss'],
})
export class CryptoPage implements OnInit {

  constructor(private newService:DataService) { }

  ngOnInit() {
    this.newService.getdata().
          subscribe(
            data =>{console.log(data)}
          );
  }

}
