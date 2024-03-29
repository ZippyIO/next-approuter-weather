import clsx from 'clsx';
import { sub } from 'date-fns';
import { formatInTimeZone, toDate } from 'date-fns-tz';

import { type DefaultChartYScale, type WaterQualitySteps } from '~/data/waterdata-stations';
import { type WaterData } from '~/lib/validators/WaterDataValidator';
import { type ColorStep, type SerieWithColor } from '~/lib/weather';

export const baseWaterDataParams = {
  service: 'kisters',
  type: 'queryServices',
  request: 'getTimeseriesValues',
  datasource: '0',
  format: 'json',
  returnfields: 'Timestamp,Value',
  md_returnfields:
    'station_longname,station_no,station_latitude,station_longitude,parametertype_name,ts_name,ts_unitname,custom_attributes',
  custattr_returnfields: 'DATA_OWNER_NAME',
  metadata: 'true',
};

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

export const createWaterChartData = (
  riverData: WaterData,
  name: string,
  range: number,
  colorSteps: ColorStep[],
): SerieWithColor[] => {
  let startDate: string;
  for (const x of riverData.data) {
    if (x[0] !== null && (typeof x[0] === 'string' || typeof x[0] === 'number')) {
      startDate = x[0].toString();
      break;
    }
  }

  let endDate: string;
  for (let i = riverData.data.length - 1; i >= 0; i--) {
    const value = riverData.data[i][0];
    if (value !== null && (typeof value === 'string' || typeof value === 'number')) {
      endDate = formatInTimeZone(
        sub(toDate(value, { timeZone: 'Australia/Canberra' }), { days: range }),
        'Australia/Canberra',
        "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
      );

      break;
    }
  }

  const toIndex = riverData.data.findIndex(() => compareDateOnly(endDate, startDate));
  const slicedData = toIndex !== -1 ? riverData.data.slice(toIndex) : riverData.data;

  const mappedValues = colorSteps.map((step) => {
    const mappedData = slicedData
      .filter(
        (data) =>
          (typeof data[0] === 'string' || typeof data[0] === 'number') &&
          typeof data[1] === 'number',
      )
      .map((data) => {
        const timestamp = data[0] as string | number;
        const value = data[1] as number;
        if (value && Math.round(value) >= step.low && Math.round(value) <= step.high) {
          return {
            x: new Date(timestamp),
            y: value,
          };
        } else {
          return {
            x: new Date(timestamp),
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

export const getWaterMinMaxValues = (
  waterData: WaterData['data'],
  type: 'discharge' | 'level',
  chartYScale: DefaultChartYScale,
) => {
  const mappedData = waterData
    .filter((data) => typeof data[1] === 'number')
    .map((data) => {
      return Number(data[1]);
    });

  const min = Math.min(...mappedData);
  const max = Math.max(...mappedData);

  console.log(max);
  const finalMin = min < chartYScale.defaultMin ? min : chartYScale.defaultMin;
  const finalMax = max > chartYScale.defaultMax ? max : chartYScale.defaultMax;
  console.log(finalMax);

  if (type === 'discharge') {
    return {
      min: finalMin,
      max: finalMax + chartYScale.maxPadding,
    };
  } else if (type === 'level') {
    return {
      min: finalMin,
      max: finalMax + chartYScale.maxPadding,
    };
  } else {
    return {
      min: finalMin,
      max: finalMax + chartYScale.maxPadding,
    };
  }
};

export const mergeRiverData = (discharge: WaterData, level: WaterData) => {
  const dischargePairs = discharge.data.filter(
    (item): item is [string | number, number] => item.length === 2,
  );
  const levelPairs = level.data.filter(
    (item): item is [string | number, number] => item.length === 2,
  );
  const mergedArray: MergedRiverData = [];
  const dischargeMap = new Map(dischargePairs);
  const levelMap = new Map(levelPairs);
  const allDates = new Set([...dischargeMap.keys(), ...levelMap.keys()]);

  for (const date of allDates) {
    const dischargeValue = dischargeMap.get(date);
    const levelValue = levelMap.get(date);

    if (dischargeValue ?? levelValue) {
      mergedArray.push({
        date: date.toString(),
        discharge: dischargeValue,
        level: levelValue,
      });
    }
  }

  return mergedArray;
};

export const formatWaterDataTableValues = (waterData: WaterData['data']) => {
  const filteredData = waterData
    .slice()
    .reverse()
    .filter((data) => data[1] !== null && data[0] !== null);

  return filteredData.map((data, index, self) => {
    let change = '0.000';

    if (index >= 0) {
      const diff = Number(data[1]) - Number(self[index + 1]?.[1]) ?? 0;

      if (diff > 0) {
        change = `+ ${diff.toFixed(3)}`;
      } else if (diff < 0) {
        change = `- ${Math.abs(diff).toFixed(3)}`;
      }
    }

    return {
      timestamp: formatInTimeZone(data[0] as string | number, '+10', 'dd/MM/yy - HH:mm'),
      value: data[1] as string | number,
      change: change,
    };
  });
};

export const waterQualityCn = (level: number, steps: WaterQualitySteps) => {
  return clsx([
    level <= steps.low && 'bg-m-blue-7',
    level > steps.low && level <= steps.medium && 'bg-m-green-7',
    level > steps.medium && level <= steps.high && 'bg-m-yellow-7',
    level > steps.high && level <= steps.veryHigh && 'bg-m-orange-7',
    level > steps.veryHigh && level <= steps.extreme && 'bg-m-red-7',
    level > steps.extreme && 'bg-m-grape-7',
    level === 0 && 'bg-m-gray-7',
  ]);
};
