import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
  }

  getGazdinstvo(): any {
    return [
      {id: '1', name: 'Klekovaca-Potoci'},
      {id: '2', name: 'Ribnik'},
      {id: '3', name: 'Drinic'},
    ];
  }

  getPrivrednaJedinica(): any {
    return [
      {id: '1', name: 'Potoci-Resanovaca'},
      {id: '2', name: 'Repavac'},
      {id: '3', name: 'Klekovaca-Drvar'},
    ];
  }

  getOdjel(): any {
    return [
      {id: '1', name: '69'},
      {id: '2', name: '70'},
      {id: '3', name: '71'},
    ];
  }

  getVrstaSjece(): any {
    return [
      {id: '1', name: 'Redovna sjeca'},
      {id: '2', name: 'Vanredna sjeca'},
      {id: '3', name: 'Slucajni uzitak'},
    ];
  }

  getProjektant(): any {
    return [
      {id: '1', name: 'Kratko ime'},
      {id: '2', name: 'Dugacko imeInzenjera'},
      {id: '3', name: 'Inzenjer-3'},
    ];
  }

  getRukovodilacPripreme(): any {
    return [
      {id: '1', name: 'Kratko ime'},
      {id: '2', name: 'Dugacko imeInzenjera'},
      {id: '3', name: 'Inzenjer-3'},
    ];
  }

  getSumskoPrivrednoPodrucje(): any {
    return [
      {id: '1', name: 'Istocnodrvarsko'},
      {id: '2', name: 'SPP 2'},
      {id: '3', name: 'Spp 3'},
    ];
  }

  getGrad(): any {
    return [
      {id: '1', name: 'Ribnik'},
      {id: '2', name: 'Istocni Drvar'},
      {id: '3', name: 'Drinic'},
    ];
  }


}
