import moment from 'moment';

moment.locale('fr');

export class Communication {
  date: moment.Moment;
  consultant: string;
  medium: string;

  constructor(date: moment.Moment, consultant: string, medium: string) {
    this.date = date;
    this.consultant = consultant;
    this.medium = medium;
  }

  public toString = (): string => {
    return `(${this.medium}) ${this.consultant}, ${this.date.format(
      'Do MMMM'
    )}`;
  };
}

function pastCall(days: number, consultant: string) {
  return new Communication(daysInPast(days), consultant, 'appel');
}

function pastMail(days: number, consultant: string) {
  return new Communication(daysInPast(days), consultant, 'email');
}

function daysInPast(days: number) {
  return moment()
    .clone()
    .subtract(days, 'days');
}

export const calls = [
  pastCall(14, 'Arthur'),
  pastCall(12, 'Bruno'),
  pastCall(7, 'Cathie'),
  pastCall(1, 'Damien'),
  pastCall(20, 'Fabien'),
  pastCall(3, 'Gabrielle'),
  pastMail(5, 'Irène')
];

export const emails = [
  pastMail(3, 'Arthur'),
  pastMail(12, 'Bruno'),
  pastCall(13, 'Emilie'),
  pastMail(19, 'Fabien'),
  pastMail(2, 'Hélène'),
  pastMail(6, 'Hélène')
];
