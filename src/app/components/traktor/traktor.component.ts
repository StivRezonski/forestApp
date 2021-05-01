import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import  *  as  data  from  '../../norme/traktor.json';
@Component({
  selector: 'app-traktor',
  templateUrl: './traktor.component.html',
  styleUrls: ['./traktor.component.css']
})
export class TraktorComponent implements OnInit {
  pika = 4
  // products: any = data.default;

  constructor(private http: HttpClient) {
   }

   ngOnInit(){
// this.products.push(this.pika)
    // console.log(this.products);

  }

}
