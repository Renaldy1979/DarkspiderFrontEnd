import { parseISO } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';

export default function formatDate(data: string) {
  if (!data) {
    return 'A Definir';
  }
  const time = data;

  const parsedTime = parseISO(time);

  const formatInTimeZone = (date, fmt, tz) =>
    format(utcToZonedTime(date, tz), fmt, { timeZone: tz });

  return formatInTimeZone(parsedTime, 'dd/MM/yyyy', 'UTC');
}
