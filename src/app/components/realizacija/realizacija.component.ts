import { Component, OnInit } from '@angular/core';
import { TrupciService } from '../../services/trupci.service';

@Component({
  selector: 'app-realizacija',
  templateUrl: './realizacija.component.html',
  styleUrls: ['./realizacija.component.css']
})
export class RealizacijaComponent implements OnInit {


  constructor(public trupci: TrupciService) {
  }


  ngOnInit(): void {
    console.log(
      this.trupci.sumCet,
      this.trupci.debelaOblovinaCet
    );
  }
}




