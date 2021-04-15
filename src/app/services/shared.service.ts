import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
  }

  getGazdinstvo(): any {
    return [
      {id: '1', name: 'Клековача-Потоци'},
      {id: '2', name: 'Рибник'},
      {id: '3', name: 'Дринић'},
    ];
  }

  getPrivrednaJedinica(): any {
    return [
      {id: '1', name: 'Потоци-Ресановача'},
      {id: '2', name: 'Реповац'},
      {id: '3', name: 'Клековача-Дрвар'},
    ];
  }

  getOdjel(): any {
    return [
      {id: '1', name: '01'},
      {id: '2', name: '02'},
      {id: '3', name: '03'},
      {id: '4', name: '04'},
      {id: '5', name: '05'},
      {id: '6', name: '06'},
      {id: '7', name: '07'},
      {id: '8', name: '08'},
      {id: '9', name: '09'},
      {id: '10', name: '10'},
      {id: '11', name: '11'},
      {id: '12', name: '12'},
      {id: '13', name: '13'},
      {id: '14', name: '14'},
      {id: '15', name: '15'},
      {id: '16', name: '16'},
      {id: '17', name: '17'},
      {id: '18', name: '18'},
      {id: '19', name: '19'},
      {id: '20', name: '20'},
    ];
  }

  getVrstaSjece(): any {
    return [
      {id: '1', name: 'Редовна сјеча'},
      {id: '2', name: 'Ванредна сјеча'},
      {id: '3', name: 'Случајни ужитак'},
    ];
  }

  getProjektant(): any {
    return [
      {id: '1', name: 'Боснић Бранислав'},
      {id: '2', name: 'Бјељац Милош'},
      {id: '3', name: 'Ковач Александар'},
    ];
  }

  getDirektor(): any {
    return [
      {id: '1', name: 'Гојковић Славен'},
      {id: '2', name: 'Кецман Милан'},
      {id: '3', name: 'Петар Петровић'},
    ];
  }

  getRukovodilacPripreme(): any {
    return [
      {id: '1', name: 'Кнежевић Велибор'},
      {id: '2', name: 'Тадић Милан'},
      {id: '3', name: 'Лукач Драган'},
    ];
  }

  getSumskoPrivrednoPodrucje(): any {
    return [
      {id: '1', name: 'Источнодрварско'},
      {id: '2', name: 'SPP 2'},
      {id: '3', name: 'Spp 3'},
    ];
  }

  getGrad(): any {
    return [
      {id: '1', name: 'Рибник'},
      {id: '2', name: 'Источни Дрвар'},
      {id: '3', name: 'Дринић'},
    ];
  }


}
