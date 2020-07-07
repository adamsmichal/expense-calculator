import { jsonDateParser } from "json-date-parser";
import { appointments } from "../store/monthAppointments";

export const remCalc = (px: number) => {
  return `${px / 16}rem`;
};
export const emCalc = (px: number) => `${px / 16}em`;

export const getMonthName = (month: number) => {
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return months[month];
};

const month = new Date().getMonth();
export const months = [
  month - 3,
  month - 2,
  month - 1,
  month,
  month + 1,
  month + 2,
  month + 3,
];

export const monthlySummary = () => {
  const chart = [];
  let idx = 0;

  do {
    idx++;
    const currentMonth = months[idx - 1];

    const data = localStorage.getItem("scheduler-unique")
      ? JSON.parse(localStorage.getItem("scheduler-unique")!, jsonDateParser)
      : appointments;

    const summary = data
      .filter(
        (item: any) =>
          (String(item.rRule).includes("FREQ=MONTHLY") &&
            currentMonth >= item.startDate.getMonth()) ||
          item.startDate.getMonth() === currentMonth
      )
      .map((item: any) => item.payment)
      .reduce(
        (prevent: string, current: string) => Number(prevent) + Number(current),
        0
      );

    chart.push({ month: getMonthName(currentMonth), summary });
  } while (idx < 7);

  console.log("res", chart);
  return chart;
};
