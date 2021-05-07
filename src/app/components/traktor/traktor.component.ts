import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../../norme/traktor.json';
@Component({
  selector: 'app-traktor',
  templateUrl: './traktor.component.html',
  styleUrls: ['./traktor.component.css']
})
export class TraktorComponent implements OnInit {
  
  normeTraktor:  any  = (data  as  any).default;

  constructor(private http: HttpClient) {
   }

   ngOnInit(){
    
    console.log(this.normeTraktor[0]);

  }

}
