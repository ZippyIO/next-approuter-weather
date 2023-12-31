'use client';

import { createColumnHelper } from '@tanstack/react-table';

import clsx from 'clsx';
import { formatInTimeZone } from 'date-fns-tz';
import { useMemo } from 'react';

import Table from '~/components/table/Table';
import { type RiverData } from '~/types/types';

type RiverTableData = {
  timestamp: string;
  value: string | number;
  change: string;
};

type Props = {
  riverData: RiverData[];
};

const RiverTable = ({ riverData }: Props) => {
  const data = useMemo((): RiverTableData[] => {
    return riverData[0].data
      .slice()
      .reverse()
      .filter((data) => data[1] !== null)
      .map((data, index, self) => {
        let change = '0.000';
        if (index > 0) {
          const diff = Number(data[1]) - Number(self[index - 1][1]);
          if (diff > 0) {
            change = `+ ${diff.toFixed(3)}`;
          } else if (diff < 0) {
            change = `- ${Math.abs(diff).toFixed(3)}`;
          }
        }

        return {
          timestamp: formatInTimeZone(data[0], '+10', 'dd/MM/yy - HH:mm'),
          value: data[1] ?? '',
          change: change,
        };
      });
  }, [riverData]);

  const columns = useMemo(() => {
    const helper = createColumnHelper<RiverTableData>();
    return [
      helper.accessor('timestamp', {
        cell: (row) => row.getValue(),
      }),
      helper.accessor('value', {
        cell: (row) => row.getValue(),
      }),
      helper.accessor('change', {
        cell: (row) => {
          const className = clsx([
            row.getValue().startsWith('+') && 'text-m-green-6',
            row.getValue().startsWith('-') && 'text-m-red-6',
            row.getValue().startsWith('0') && 'text-m-blue-6',
          ]);

          return <span className={className}>{row.getValue()}</span>;
        },
      }),
    ];
  }, []);

  return (
    <Table<RiverTableData> title={riverData[0].parametertype_name} data={data} columns={columns} />
  );
};

export default RiverTable;
