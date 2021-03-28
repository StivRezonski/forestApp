import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forest';
  hideNavbarAndFooter = true;
constructor(private sharedService: SharedService) {
  // za print
  // sharedService.changeEmitted$.subscribe(
  //   text => {
  //     console.log(text);
  //     this.hideNavbarAndFooter = text;
  //   });
}
}
