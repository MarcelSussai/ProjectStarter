import * as S from './styles'
import * as I from './interfaces'
import { formatAsPercentage } from '@/utils/formatAsPercentage';
import { configMonetaryValue } from '@/utils/configMonetaryValue';
import MonetaryText from '@/type/monetaryText';
import DateText from '@/type/dateText';
import TextDefault from '@/type/textDefault';
import PercentText from '@/type/percentText';
import IdText from '@/type/idText';

interface IRowData extends I.IResults {
  description?: string
  percentage?: number | string
  date?: string
  monetaryValue?: number
}

export const ConfigColumns: I.ICollunnsConfig[] = [
  {
    idKey: 'id', name: 'ID', order: 1,
    ValueComponent: (row: IRowData, color) => (
      <IdText color={color}>{row.id}</IdText>
    ),
    sizeOfColumn: { min: '80px' },
    hideByDefault: true,
  },
  {
    idKey: 'description', name: 'Descrição', order: 2,
    ValueComponent: (row: IRowData, color) => (
      <TextDefault color={color}>{row.description}</TextDefault>
    ),
    sizeOfColumn: { min: '176px', max: '10fr' },
    hideByDefault: false,
  },
  {
    idKey: 'percentage', name: '%', order: 3,
    ValueComponent: (row: IRowData, color) => (
      <PercentText color={color}>
        {formatAsPercentage(Number(row.percentage))}
      </PercentText>
    ),
    sizeOfColumn: { min: '88px' },
    hideByDefault: false,
  },
  {
    idKey: 'date', name: 'Data', order: 4,
    ValueComponent: (row: IRowData, color) => (
      <DateText color={color}>{new Date(`${row.date}`).toLocaleDateString()}</DateText>
    ),
    sizeOfColumn: { min: '128px'},
    hideByDefault: false,
  },
  {
    idKey: 'monetaryValue', name: 'Valor', order: 5,
    ValueComponent: (row: IRowData, color) => (
      <MonetaryText color={color}>{configMonetaryValue(row.monetaryValue)}</MonetaryText>
    ),
    sizeOfColumn: { min: '216px' },
    hideByDefault: false,
  },
]
