import { add, format, getHours, isAfter, isBefore, isEqual, parseISO, setHours } from 'date-fns';

import { type Weather } from '~/app/page';

export const getWeatherIcon = (
  time: string,
  sunriseStr: string,
  sunsetStr: string,
  code: number,
) => {
  const today = parseISO(time);
  const tomorrow = add(today, { days: 1 });

  const sunrise = parseISO(sunriseStr);
  const sunriseHours = getHours(sunrise);
  const sunset = parseISO(sunsetStr);
  const sunsetHours = getHours(sunset);

  const sunriseToday = setHours(today, sunriseHours);
  const sunsetToday = setHours(today, sunsetHours);
  const sunriseTomorrow = setHours(tomorrow, sunriseHours);

  const isAfterSunrise = isAfter(today, sunriseToday);
  const isBeforeSunset = isBefore(today, sunsetToday);
  const isAfterSunset = isAfter(today, sunset);
  const isBeforeTomorrowSunrise = isBefore(today, sunriseTomorrow);

  if (
    (isAfterSunrise && isBeforeSunset) ||
    isEqual(today, sunriseToday) ||
    isEqual(today, sunsetToday)
  ) {
    return `${code}0.png`;
  } else if (isAfterSunset && isBeforeTomorrowSunrise) {
    return `${code}1.png`;
  }
};

export const createChartData = (data: Weather, field: string) => {
  const mappedData = data.data.timelines[0].intervals.map((interval) => {
    return {
      x: format(parseISO(interval.startTime), 'dd/MM/yy-HH:mm'),
      y: interval.values[field as keyof typeof interval.values],
    };
  });

  return {
    id: field,
    data: mappedData,
  };
};
