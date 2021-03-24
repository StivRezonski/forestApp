import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {
  }

  getGazdinstvo()  {
    return [
      {id: '1', name: 'Klekovaca-Potoci'},
      {id: '2', name: 'Ribnik'},
      {id: '3', name: 'Drinic'},
    ];
  }
  getPrivrednaJedinica()  {
    return [
      {id: '1', name: 'Potoci-Resanovaca'},
      {id: '2', name: 'Repavac'},
      {id: '3', name: 'Klekovaca-Drvar'},
    ];
  }
  getOdjel()  {
    return [
      {id: '1', name: '69'},
      {id: '2', name: '70'},
      {id: '3', name: '71'},
    ];
  }
  getVrstaSjece(){
    return [
      {id: '1', name: 'Redovna sjeca'},
      {id: '2', name: 'Vanredna sjeca'},
      {id: '3', name: 'Slucajni uzitak'},
    ];
  }
  getProjektant(){
    return [
      {id: '1', name: 'Cove'},
      {id: '2', name: 'Pajo'},
      {id: '3', name: 'Branca'},
    ];
  }


}
