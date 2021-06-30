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
    ];
  }

  getPrivrednaJedinica(): any {
    return [
      {id: '1', name: 'Потоци-Ресановача'},
      {id: '2', name: 'Клековача-Реповац'},
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
      {id: '3', name: 'Случајни ужици'},
    ];
  }

  getProjektant(): any {
    return [
      {id: '1', name: 'Боснић Бранислав'},
      {id: '2', name: 'Тубић Душко'},
      {id: '3', name: 'Гогић Милорад'},
      {id: '4', name: 'Лукач Драган'},
      {id: '5', name: 'Тадић Милан'},
      {id: '6', name: 'Смиљић Александар'},
      {id: '7', name: 'Топалић Александар'},
    ];
  }

  getDirektor(): any {
    return [
      {id: '1', name: 'Гојковић Славен'},
      {id: '2', name: 'Кецман Милан'},
      {id: '3', name: 'Јаћимовић Небојша'},
      {id: '5', name: 'Бјељац Милош'},

    ];
  }

  getRukovodilacPripreme(): any {
    return [
      {id: '1', name: 'Ковач Александар'},
      {id: '2', name: 'Петар Петровић'},
      {id: '3', name: 'Јанковић Јанко'},
      {id: '4', name: 'Мирко Мирковић'},
    ];
  }

  getSumskoPrivrednoPodrucje(): any {
    return [
      {id: '1', name: 'Источнодрварско'},
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
      {id: '1', name: 'Бањац Петар'},
    ];
  }

  getLiceZaNadzor(): any {
    return [
      {id: '1', name: 'Кнежевић Велибор'},
    ];
  }

  getBrojCekica(): any {
    return [
      {id: '1'},
      {id: '2'},
      {id: '3'},
      {id: '4'},
      {id: '5'},
      {id: '6'},
      {id: '7'},
      {id: '8'},
      {id: '9'},
      {id: '10'},
      {id: '11'},
      {id: '12'},
      {id: '13'},
      {id: '14'},
      {id: '15'},
    ];
  }

  getGodina(): any {
    return [
      {id: '2021'},
      {id: '2022'},
      {id: '2023'},
      {id: '2024'},
      {id: '2025'},
      {id: '2026'},
      {id: '2027'},
      {id: '2028'},
    ];
  }

  getMjesec(): any {
    return [
      {name: 'Јануар'},
      {name: 'Фебруар'},
      {name: 'Март'},
      {name: 'Април'},
      {name: 'Мај'},
      {name: 'Јуни'},
      {name: 'Јули'},
      {name: 'Август'},
      {name: 'Септембар'},
      {name: 'Октобар'},
      {name: 'Новембар'},
      {name: 'Децембар'},
    ];
  }



}
