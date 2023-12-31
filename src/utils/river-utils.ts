import { sub } from 'date-fns';
import { formatInTimeZone, toDate } from 'date-fns-tz';

import { type RiverData } from '~/types/types';
import { type ColorStep, type SerieWithColor } from '~/utils/weather-utils';

export type MergedRiverData = {
  date: string;
  discharge?: number;
  level?: number;
}[];

const compareDateOnly = (date1: string, date2: string) => {
  return (
    formatInTimeZone(date1, 'Australia/Canberra', 'dd/MM/yy') ===
    formatInTimeZone(date2, 'Australia/Canberra', 'dd/MM/yy')
  );
};

export const createRiverChartData = (
  riverData: RiverData,
  name: string,
  range: number,
  colorSteps: ColorStep[],
): SerieWithColor[] => {
  const latestDate = riverData.data[riverData.data.length - 1][0];
  const endDate = formatInTimeZone(
    sub(toDate(latestDate, { timeZone: 'Australia/Canberra' }), { days: range }),
    'Australia/Canberra',
    "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
  );

  const toIndex = riverData.data.findIndex((interval) => compareDateOnly(endDate, interval[0]));
  const slicedData = toIndex !== -1 ? riverData.data.slice(toIndex) : riverData.data;

  const mappedValues = colorSteps.map((step) => {
    const mappedData = slicedData.map((data) => {
      const value = data[1];
      if (value && Math.round(value) >= step.low && Math.round(value) <= step.high) {
        return {
          x: new Date(data[0]),
          y: data[1],
        };
      } else {
        return {
          x: new Date(data[0]),
          y: null,
        };
      }
    });

    if (mappedData.length === 0) {
      return null;
    } else {
      return { id: `${step.low}-${step.high}`, color: step.color, data: mappedData };
    }
  });

  return mappedValues.filter((value) => value !== null) as SerieWithColor[];
};

export const getRiverMinMaxValues = (
  riverData: RiverData,
  { defaultMin = 0, defaultMax = 40 } = {},
) => {
  const mappedData = riverData.data
    .filter((data) => typeof data[1] === 'number')
    .map((data) => {
      return data[1]!;
    });

  const min = Math.min(...mappedData);
  const max = Math.max(...mappedData);

  return {
    min: min < defaultMin ? min : defaultMin,
    max: max > defaultMax ? max : defaultMax,
  };
};

export const mergeRiverData = (discharge: RiverData, level: RiverData) => {
  const mergedArray: MergedRiverData = [];
  const dischargeMap = new Map(discharge.data);
  const levelMap = new Map(level.data);
  const allDates = new Set([...dischargeMap.keys(), ...levelMap.keys()]);
  for (const date of allDates) {
    const dischargeValue = dischargeMap.get(date);
    const levelValue = levelMap.get(date);

    if (dischargeValue ?? levelValue) {
      mergedArray.push({
        date,
        discharge: dischargeValue,
        level: levelValue,
      });
    }
  }

  return mergedArray;
};
