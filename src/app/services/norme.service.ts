import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NormeService {
  podaciZaIzracunCijene = [];
  
  cijenaRadnogDanaSjeca = 89.37;
  cijenaRadnogDanaAnimal = 124.63;
  cijenaRadnogDanaTraktor = 696.26;
  cijenaRadnogDanaIznos = 110.06;

  constructor() {}

  //Norme sjeca cetinari ljeto

  ljetoUslovi1Cet = [
  {25:'3.54',30:'4.69',35:'5.79',40:'6.89',45:'8.03',50:'9.16',55:'10.3',60:'11.42',65:'12.49',70:'13.54'},
  {25:'3.52',30:'4.53',35:'5.58',40:'6.64',45:'7.68',50:'8.74',55:'9.79',60:'10.78',65:'11.77',70:'12.74'},
  {25:'3.45',30:'4.42',35:'5.36',40:'6.35',45:'7.31',50:'8.24',55:'9.19',60:'10.08',65:'21.85',70:'11.80'},
  {25:'3.20',30:'4.06',35:'4.92',40:'5.82',45:'6.75',50:'7.59',55:'8.45',60:'9.25',65:'10.05',70:'10.82'},
  {25:'3.01',30:'3.80',35:'4.60',40:'5.41',45:'6.19',50:'6.94',55:'7.68',60:'8.40',65:'9.07',70:'9.77'}];

  ljetoUslovi2Cet = [
  {25:'3.18',30:'4.24',35:'5.26',40:'6.29',45:'7.36',50:'8.43',55:'9.51',60:'10.58'},
  {25:'3.17',30:'4.10',35:'5.09',40:'6.08',45:'7.07',50:'8.08',55:'9.08',60:'9.89'},
  {25:'3.12',30:'4.02',35:'4.90',40:'5.84',45:'6.75',50:'7.64',55:'8.56',60:'9.41'},
  {25:'2.90',30:'3.71',35:'4.52',40:'5.38',45:'6.26',50:'7.08',55:'7.90',60:'8.68'},
  {25:'2.74',30:'3.49',35:'4.25',40:'5.02',45:'5.78',50:'6.50',55:'7.22',60:'7.92'}];

  ljetoUslovi3Cet = [
  {25:'2.82',30:'3.79',35:'4.74',40:'5.69',45:'6.70',50:'7.70',55:'8.72',60:'9.75',65:'10.72',70:'11.71'},
  {25:'2.82',30:'3.68',35:'4.60',40:'5.53',45:'6.46',50:'.7.41',55:'8.36',60:'9.00',65:'10.19',70:'11.09'},
  {25:'2.78',30:'3.62',35:'4.45',40:'5.33',45:'6.19',50:'7.04',55:'7.92',60:'8.74',65:'9.54',70:'10.36'},
  {25:'2.60',30:'3.36',35:'4.13',40:'4.94',45:'5.77',50:'6.56',55:'7.34',60:'8.10',65:'8.85',70:'9.58'},
  {25:'2.48',30:'3.18',35:'3.90',40:'4.64',45:'5.36',50:'6.06',55:'6.75',60:'7.43',65:'8.07',70:'8.74'}];

  ljetoUslovi4Cet = [
  {25:'2.54',30:'3.42',35:'4.31',40:'5.20',45:'6.14',50:'7.08',55:'8.05',60:'9.04'},
  {25:'2.54',30:'3.32',35:'4.18',40:'5.05',45:'5.92',50:'6.82',55:'7.72',60:'8.34'},
  {25:'2.76',30:'3.27',35:'4.05',40:'4.86',45:'5.68',50:'6.48',55:'7.32',60:'8.10'},
  {25:'2.58',30:'3.04',35:'3.76',40:'4.51',45:'5.29',50:'6.04',55:'6.78',60:'7.50'},
  {25:'2.46',30:'2.87',35:'3.55',40:'4.24',45:'4.92',50:'5.58',55:'6.24',60:'6.88'}];

  ljetoUslovi5Cet = [
  {25:'2.25',30:'3.06',35:'3.88',40:'4.70',45:'5.59',50:'6.47',55:'7.38',60:'8.32',65:'9.20',70:'10.13'},
  {25:'2.25',30:'2.97',35:'3.77',40:'4.57',45:'5.39',50:'6.23',55:'7.08',60:'7.68',65:'8.75',70:'9.59'},
  {25:'2.74',30:'2.92',35:'3.65',40:'4.40',45:'5.16',50:'5.92',55:'6.71',60:'7.46',65:'8.19',70:'8.96'},
  {25:'2.56',30:'2.71',35:'3.39',40:'4.08',45:'4.81',50:'5.52',55:'6.22',60:'6.91',65:'7.60',70:'8.28'},
  {25:'2.44',30:'2.56',35:'3.20',40:'3.83',45:'4.47',50:'5.10',55:'5.72',60:'6.34',65:'6.90',70:'7.55'}];

ljetoCet = [this.ljetoUslovi1Cet, this.ljetoUslovi2Cet, this.ljetoUslovi3Cet, this.ljetoUslovi4Cet, this.ljetoUslovi5Cet];

//Norme sjeca liscari ljeto

ljetoUslovi1Lis = [
{25:'6.58',30:'7.54',35:'8.82',40:'10.16',45:'11.56',50:'12.97',55:'14.35',60:'15.76',65:'17.10',70:'18.43'},
{25:'6.03',30:'6.87',35:'8.04',40:'9.29',45:'10.55',50:'11.83',55:'13.07',60:'14.35',65:'15.60',70:'16.58'},
{25:'5.58',30:'6.25',35:'7.21',40:'8.34',45:'9.52',50:'10.69',55:'11.82',60:'12.95',65:'14.11',70:'15.25'},
{25:'4.96',30:'5.52',35:'6.41',40:'7.30',45:'8.35',50:'9.40',55:'10.46',60:'11.55',65:'12.59',70:'13.59'},
{25:'4.37',30:'4.83',35:'5.51',40:'6.38',45:'7.28',50:'8.14',55:'9.07',60:'9.89',65:'10.78',70:'11.61'}];

ljetoUslovi2Lis = [
{25:'6.14',30:'7.04',35:'8.25',40:'9.54',45:'10.88',50:'12.24',55:'13.59',60:'14.97'},
{25:'5.71',30:'6.49',35:'7.60',40:'8.80',45:'10.02',50:'11.25',55:'12.46',60:'13.71'},
{25:'5.38',30:'5.99',35:'6.90',40:'7.97',45:'9.10',50:'10.24',55:'11.34',60:'12.45'},
{25:'4.89',30:'5.36',35:'6.20',40:'7.05',45:'8.06',50:'9.08',55:'10.11',60:'11.18'},
{25:'4.34',30:'4.78',35:'5.41',40:'6.24',45:'7.10',50:'7.93',55:'8.84',60:'9.64'}];

ljetoUslovi3Lis = [
{25:'5.69',30:'6.53',35:'7.68',40:'8.91',45:'10.20',50:'11.52',55:'12.83',60:'14.18',65:'15.47',70:'16.77'},
{25:'5.39',30:'6.11',35:'7.15',40:'8.30',45:'9.47',50:'10.67',55:'11.85',60:'13.07',65:'14.28',70:'15.50'},
{25:'5.19',30:'5.73',35:'6.58',40:'7.60',45:'8.69',50:'9.80',55:'10.87',60:'11.95',65:'13.07',70:'14.18'},
{25:'4.82',30:'5.21',35:'6.00',40:'6.80',45:'7.78',50:'8.76',55:'9.76',60:'10.80',65:'11.80',70:'12.77'},
{25:'4.30',30:'4.73',35:'5.31',40:'6.09',45:'6.92',50:'7.72',55:'8.61',60:'9.39',65:'10.24',70:'11.04'}];

ljetoUslovi4Lis = [
{25:'5.30',30:'6.10',35:'7.18',40:'8.36',45:'9.60',50:'10.88',55:'12.15',60:'13.47'},
{25:'5.02',30:'5.70',35:'6.69',40:'7.79',45:'8.92',50:'10.08',55:'11.22',60:'12.42'},
{25:'4.84',30:'5.35',35:'6.16',40:'7.14',45:'8.18',50:'9.26',55:'10.29',60:'11.35'},
{25:'4.50',30:'4.86',35:'5.61',40:'6.38',45:'7.32',50:'8.27',55:'9.24',60:'10.26'},
{25:'4.01',30:'4.42',35:'4.96',40:'5.72',45:'6.52',50:'7.29',55:'8.15',60:'8.92'}];

ljetoUslovi5Lis = [
{25:'4.92',30:'5.66',35:'6.69',40:'7.81',45:'9.00',50:'10.23',55:'11.47',60:'12.76',65:'14.00',70:'15.26'},
{25:'4.66',30:'5.30',35:'6.23',40:'7.28',45:'8.36',50:'9.48',55:'10.59',60:'11.76',65:'12.92',70:'14.10'},
{25:'4.49',30:'4.97',35:'5.73',40:'6.67',45:'7.67',50:'8.71',55:'9.71',60:'10.75',65:'11.82',70:'12.90'},
{25:'4.17',30:'4.52',35:'5.22',40:'5.97',45:'6.87',50:'7.78',55:'8.72',60:'9.72',65:'10.67',70:'11.62'},
{25:'3.72',30:'4.10',35:'4.62',40:'5.35',45:'6.11',50:'6.86',55:'7.69',60:'8.45',65:'9.26',70:'10.04'}];

ljetoLis = [this.ljetoUslovi1Lis, this.ljetoUslovi2Lis, this.ljetoUslovi3Lis, this.ljetoUslovi4Lis, this.ljetoUslovi5Lis];


// Norme animal

  uslovi1AnimalCet = [
    {100:'24.42',200:'20.14',300:'17.56',400:'15.43',500:'13.78',600:'12.42',700:'11.74',800:'10.90',900:'10.18',1000:'9.64',1200:'8.62',1400:'7.68',1600:'6.77',1800:'6.34',2000:'5.79'},
    {100:'19.10',200:'15.77',300:'13.74',400:'11.96',500:'10.78',600:'9.74',700:'8.87',800:'8.12',900:'7.36',1000:'6.96',1200:'5.71',1400:'5.55',1600:'4.89',1800:'4.57',2000:'4.19'}
  ];
  uslovi2AnimalCet = [
    {100:'21.38',200:'18.28',300:'15.75',400:'13.59',500:'12.26',600:'10.85',700:'10.24',800:'9.66',900:'8.89',1000:'8.32',1200:'7.43',1400:'6.59',1600:'5.85',1800:'5.41',2000:'4.93'},
    {100:'17.50',200:'14.31',300:'12.07',400:'10.57',500:'9.46',600:'8.50',700:'7.72',800:'7.04',900:'6.43',1000:'6.02',1200:'5.11',1400:'4.76',1600:'4.27',1800:'3.90',2000:'3.56'}
  ];
  uslovi3AnimalCet = [
    {100:'18.35',200:'16.43',300:'13.95',400:'11.75',500:'10.43',600:'9.19',700:'8.74',800:'8.43',900:'7.60',1000:'7.00',1200:'6.25',1400:'5.51',1600:'4.93',1800:'4.48',2000:'4.08'},
    {100:'15.91',200:'12.85',300:'10.40',400:'9.19',500:'8.15',600:'7.27',700:'6.58',800:'5.96',900:'5.50',1000:'5.08',1200:'4.51',1400:'3.98',1600:'3.66',1800:'3.23',2000:'2.94'}
  ];
  uslovi4AnimalCet = [
    {100:'17.07',200:'14.33',300:'12.01',400:'9.97',500:'8.86',600:'7.25',700:'7.33',800:'6.97',900:'6.31',1000:'5.81',1200:'5.16',1400:'4.52',1600:'4.04',1800:'3.66',2000:'3.34'},
    {100:'14.36',200:'11.37',300:'9.16',400:'8.14',500:'7.02',600:'6.22',700:'5.61',800:'5.07',900:'4.66',1000:'4.30',1200:'3.79',1400:'3.33',1600:'3.03',1800:'2.70',2000:'2.45'}
  ];
  uslovi5AnimalCet = [
    {100:'15.80',200:'12.24',300:'10.07',400:'8.19',500:'7.30',600:'6.42',700:'5.93',800:'5.51',900:'5.02',1000:'4.62',1200:'4.07',1400:'3.53',1600:'3.16',1800:'2.85',2000:'2.60'},
    {100:'12.81',200:'9.90',300:'8.12',400:'7.09',500:'5.88',600:'5.17',700:'4.64',800:'4.18',900:'3.82',1000:'3.52',1200:'3.08',1400:'2.68',1600:'2.40',1800:'2.16',2000:'1.96'}
  ];

animalCet = [this.uslovi1AnimalCet, this.uslovi2AnimalCet, this.uslovi3AnimalCet, this.uslovi4AnimalCet, this.uslovi5AnimalCet];

uslovi1AnimalLis = [
  {100:'18.20',200:'14.96',300:'13.13',400:'11.51',500:'10.32',600:'9.26',700:'8.86',800:'8.34',900:'7.72',1000:'7.16',1200:'6.40',1400:'5.70',1600:'5.15',1800:'4.67',2000:'4.28'},
  {100:'14.16',200:'11.84',300:'10.23',400:'8.96',500:'8.07',600:'7.20',700:'7.09',800:'6.93',900:'6.38',1000:'5.94',1200:'5.41',1400:'4.28',1600:'4.34',1800:'3.95',2000:'3.62'}
];
uslovi2AnimalLis = [
  {100:'16.68',200:'13.60',300:'11.77',400:'10.17',500:'9.05',600:'8.19',700:'7.72',800:'7.23',900:'6.68',1000:'6.17',1200:'5.52',1400:'4.86',1600:'4.40',1800:'3.99',2000:'3.65'},
  {100:'12.97',200:'10.68',300:'9.11',400:'7.91',500:'7.05',600:'6.44',700:'6.20',800:'6.00',900:'5.52',1000:'5.12',1200:'4.66',1400:'3.84',1600:'3.72',1800:'3.38',2000:'3.10'}
];
uslovi3AnimalLis = [
  {100:'15.16',200:'12.25',300:'10.42',400:'8.84',500:'7.78',600:'7.13',700:'6.59',800:'6.13',900:'5.64',1000:'5.19',1200:'4.64',1400:'4.03',1600:'3.65',1800:'3.31',2000:'3.02'},
  {100:'11.79',200:'9.53',300:'7.99',400:'6.87',500:'6.04',600:'5.68',700:'5.32',800:'5.08',900:'4.66',1000:'4.30',1200:'3.91',1400:'3.37',1600:'3.10',1800:'2.81',2000:'2.57'}
];
uslovi4AnimalLis = [
  {100:'13.26',200:'10.54',300:'8.91',400:'7.45',500:'6.53',600:'5.89',700:'5.44',800:'5.04',900:'4.63',1000:'4.26',1200:'3.77',1400:'3.29',1600:'2.99',1800:'2.68',2000:'2.44'},
  {100:'10.08',200:'8.02',300:'6.76',400:'5.68',500:'4.97',600:'4.57',700:'4.27',800:'4.08',900:'3.79',1000:'3.49',1200:'3.16',1400:'2.75',1600:'2.49',1800:'2.25',2000:'2.05'}
];
uslovi5AnimalLis = [
  {100:'11.36',200:'8.84',300:'7.41',400:'6.07',500:'5.28',600:'4.66',700:'4.29',800:'3.96',900:'3.63',1000:'3.34',1200:'2.91',1400:'1.55',1600:'2.33',1800:'2.05',2000:'1.86'},
  {100:'8.37',200:'6.51',300:'5.53',400:'4.50',500:'3.91',600:'3.46',700:'3.22',800:'3.08',900:'2.92',1000:'2.68',1200:'2.41',1400:'2.12',1600:'1.89',1800:'1.70',2000:'1.54'}
];

animalLis = [this.uslovi1AnimalLis, this.uslovi2AnimalLis, this.uslovi3AnimalLis, this.uslovi4AnimalLis, this.uslovi5AnimalLis];


iznosCet = [
  {100:'6.91',200:'6.16',300:'6.60',400:'5.50',500:'4.80',600:'4.20',700:'5.11',800:'4.68',900:'4.35',1000:'4.15',1100:'8.62',1200:'7.68',1300:'6.77',1400:'6.34',1500:'5.79'},
  {100:'6.50',200:'5.73',300:'6.25',400:'5.20',500:'4.60',600:'4.07',700:'4.93',800:'4.49',900:'4.16',1000:'3.95',1100:'8.62',1200:'7.68',1300:'6.77',1400:'6.34',1500:'5.79'},
  {100:'6.09',200:'5.30',300:'5.90',400:'4.90',500:'4.40',600:'3.94',700:'4.75',800:'4.30',900:'3.98',1000:'3.76',1100:'8.62',1200:'7.68',1300:'6.77',1400:'6.34',1500:'5.79'},
  {100:'5.76',200:'4.89',300:'5.35',400:'4.49',500:'3.97',600:'3.51',700:'4.28',800:'3.78',900:'3.47',1000:'3.28',1100:'8.62',1200:'7.68',1300:'6.77',1400:'6.34',1500:'5.79'},
  {100:'5.44',200:'4.49',300:'4.80',400:'4.08',500:'3.54',600:'3.09',700:'3.82',800:'3.26',900:'2.96',1000:'2.80',1100:'8.62',1200:'7.68',1300:'6.77',1400:'6.34',1500:'5.79'}  
];

iznosLis = [
  {100:'8.64',200:'7.70',300:'8.59',400:'7.49',500:'7.04',600:'6.60',700:'7.34',800:'6.29',900:'6.14',1000:'6.00',1100:'8.62',1200:'7.68',1300:'6.77',1400:'6.34',1500:'5.79'},
  {100:'8.12',200:'7.16',300:'7.96',400:'6.86',500:'6.47',600:'6.09',700:'6.82',800:'5.74',900:'5.59',1000:'5.44',1100:'8.62',1200:'7.68',1300:'6.77',1400:'6.34',1500:'5.79'},
  {100:'7.61',200:'6.62',300:'7.33',400:'6.23',500:'5.90',600:'5.58',700:'6.30',800:'5.20',900:'5.04',1000:'4.89',1100:'8.62',1200:'7.68',1300:'6.77',1400:'6.34',1500:'5.79'},
  {100:'7.20',200:'6.11',300:'6.51',400:'5.60',500:'5.26',600:'4.93',700:'5.55',800:'4.57',900:'4.40',1000:'4.24',1100:'8.62',1200:'7.68',1300:'6.77',1400:'6.34',1500:'5.79'},
  {100:'6.80',200:'5.61',300:'5.70',400:'4.97',500:'4.63',600:'4.29',700:'4.80',800:'3.95',900:'3.77',1000:'3.60',1100:'8.62',1200:'7.68',1300:'6.77',1400:'6.34',1500:'5.79'}  
];

}

