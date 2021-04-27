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
      {id: '2', name: 'Бањац Петар'},
      {id: '3', name: 'Тубић Душко'},
      {id: '4', name: 'Кнежевић Велибор'},
      {id: '5', name: 'Гогић Милорад'},
      {id: '6', name: 'Лукач Драган'},
      {id: '7', name: 'Тадић Милан'},
      {id: '8', name: 'Смиљић Александар'},
      {id: '9', name: 'Топалић Александар'},
    ];
  }

  getDirektor(): any {
    return [
      {id: '1', name: 'Гојковић Славен'},
      {id: '2', name: 'Кецман Милан'},
      {id: '3', name: 'Јаћимовић Небојша'},
      {id: '4', name: 'Дујаковић Радомир'},
      {id: '5', name: 'Бјељац Милош'},

    ];
  }

  getRukovodilacPripreme(): any {
    return [
      {id: '1', name: 'Кнежевић Велибор'},
      {id: '2', name: 'Ковач Александар'},
      {id: '3', name: 'Петар Петровић'},
      {id: '4', name: 'Јанковић Јанко'},
      {id: '5', name: 'Мирко Мирковић'},
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


  getLiceZaEksploataciju(): any {
    return [
      {id: '1', name: 'Рајко Граховац'},
    ];
  }


  getLiceZaUzgoj(): any {
    return [
      {id: '1', name: 'Кнежевић Велибор'},
    ];
  }

  getLiceZaNadzor(): any {
    return [
      {id: '1', name: 'Рајко Кнежевић'},
    ];
  }

  getBrojCekica(): any {
    return [
      {id: '1'},
      {id: '2'},
      {id: '3'},
    ];
  }

  getGodina(): any {
    return [
      {id: '2021'},
      {id: '2022'},
      {id: '2023'},
    ];
  }

  getMjesec(): any {
    return [
      {name: 'Јануар'},
      {name: 'Фебруар'},
      {name: 'Март'},
    ];
  }


}
