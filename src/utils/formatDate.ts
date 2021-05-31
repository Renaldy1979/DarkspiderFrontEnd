import { parseISO } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';

function formatDateToDisplay(data: string, dateTime = false) {
  if (!data) {
    return '';
  }

  const time = data;

  const parsedTime = parseISO(time);

  const formatInTimeZone = (date: Date, fmt: string, tz: string) =>
    format(utcToZonedTime(date, tz), fmt, { timeZone: tz });

  return dateTime
    ? formatInTimeZone(parsedTime, 'dd/MM/yyyy hh:mm:ss', 'UTC')
    : formatInTimeZone(parsedTime, 'dd/MM/yyyy', 'UTC');
}

function formatDateToDefault(data: string) {
  if (!data) {
    return '';
  }

  const newData = data.split('/');

  const formatedData = `${newData[2]}-${newData[1]}-${newData[0]}T00:00:00.000Z`;
  return formatedData;
}
export { formatDateToDisplay, formatDateToDefault };
