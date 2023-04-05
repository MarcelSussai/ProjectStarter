import * as S from '../../components/ui/table/styles'
import * as I from './interfaces'
import { formatAsPercentage } from '@/utils/formatAsPercentage';
import { configMonetaryValue } from '@/utils/configMonetaryValue';
import MonetaryText from '@/type/monetaryText';
import DateText from '@/type/dateText';
import TextDefault from '@/type/textDefault';
import PercentText from '@/type/percentText';
import IdText from '@/type/idText';
import { StatusType } from '@/components/ui/type/interfaces';
import { ICollunnsConfig } from '@/components/ui/table/interfaces';

const rawNormalStatus = [
  3000.50,
  480.50,
  128.40,
]
const rawOkStatus = [
  60000000.40,
  128256880.05,
]
const rawWarnStatus = [96.05]
const rawAlertStatus = [
  2.40,
  1.00,
  6.40
]
const rawInfoStatus = [
  40.00,
]



export const ConfigColumns: ICollunnsConfig<I.IRowData>[] = [
  {
    idKey: 'id', name: 'ID', order: 1,
    ValueComponent: ({row, color}) => (
      <IdText color={color}>{row.id}</IdText>
    ),
    sizeOfColumn: { min: '80px' },
    hideByDefault: false,
  },
  {
    idKey: 'description', name: 'Descrição', order: 2,
    ValueComponent: ({row, color}) => (
      <TextDefault color={color}>{row.description}</TextDefault>
    ),
    sizeOfColumn: { min: '512px', max: '10fr' },
    hideByDefault: false,
  },
  {
    idKey: 'percentage', name: '%', order: 3,
    ValueComponent: ({row, color}) => (
      <PercentText color={color} status='alert'>
        {formatAsPercentage(Number(row.percentage))}
      </PercentText>
    ),
    sizeOfColumn: { min: '88px', max: '88px' },
    hideByDefault: false,
  },
  {
    idKey: 'date', name: 'Data', order: 4,
    ValueComponent: ({row, color}) => (
      <DateText color={color}>{new Date(`${row.date}`).toLocaleDateString()}</DateText>
    ),
    sizeOfColumn: { min: '112px', max: '112px'},
    hideByDefault: false,
  },
  {
    idKey: 'monetaryValue', name: 'Valor', order: 5,
    ValueComponent: ({row, color}) => {
      let rawStatus: StatusType | undefined = undefined
      if(row.monetaryValue) {
        rawStatus = rawNormalStatus.includes(row.monetaryValue) ? 'normal' :
        rawOkStatus.includes(row.monetaryValue) ? 'ok' :
        rawWarnStatus.includes(row.monetaryValue) ? 'warn' :
        rawAlertStatus.includes(row.monetaryValue) ? 'alert' :
        rawInfoStatus.includes(row.monetaryValue) ? 'info' : 'normal'
      }
      return (
      <MonetaryText
        status={rawStatus}
        color={color}
      >
        {configMonetaryValue(row.monetaryValue)}
      </MonetaryText>
    )},
    sizeOfColumn: { min: '176px', max: '176px' },
    hideByDefault: false,
  },
]
