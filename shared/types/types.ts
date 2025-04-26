export type Customer = {
  id: string;
  full_name: string;
  reference: string;
  dp: number;
  debt_credit: number;
  favorable_balance: number;
  email: string;
  phone: string;
  note: string;
  birthday_day:number;
  birthday_month:number;
};

// export type CustomerProp = {
//   id: string;
//   full_name: string;
//   reference: string;
//   dp: number;
//   debt_credit: number;
//   favorable_balance: number;
//   email:string;
//   phone:string;
//   note: string;
//   birthday_day:number;
//   birthday_month:number;
// };


export const Months = [
  {
    label: "Enero",
    value: 1,
  },
  {
    label: "Febrero",
    value: 2,
  },
  {
    label: "Marzo",
    value: 3,
  },
  {
    label: "Abril",
    value: 4,
  },
  {
    label: "Mayo",
    value: 5,
  },
  {
    label: "Junio",
    value: 6,
  },
  {
    label: "Julio",
    value: 7,
  },
  {
    label: "Agosto",
    value: 8,
  },
  {
    label: "Septiembre",
    value: 9,
  },
  {
    label: "Octubre",
    value: 10,
  },
  {
    label: "Noviembre",
    value: 11,
  },
  {
    label: "Diciembre",
    value: 12,
  },


]