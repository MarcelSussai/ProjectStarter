import * as S from '../../components/ui/table/styles'
import * as I from '../../components/ui/table/interfaces'
import { formatAsPercentage } from '@/utils/formatAsPercentage';
import { configMonetaryValue } from '@/utils/configMonetaryValue';
import MonetaryText from '@/type/monetaryText';
import DateText from '@/type/dateText';
import TextDefault from '@/type/textDefault';
import PercentText from '@/type/percentText';
import IdText from '@/type/idText';
import { ImakeColorsTone } from '@/styles/makingColorsTheme/interfaces';
import { ColorBox, ContainerAllColors } from '@/components/ui/containers/colorItemContainer';

export interface IRowData extends I.IResults {
  nameColor: string
  tones: ImakeColorsTone
}

export const ColorsTableColumnsConfig: I.ICollunnsConfig<IRowData>[] = [
  {
    idKey: 'nameColor', name: 'Nome', order: 1,
    ValueComponent: ({row, color}) => (
      <IdText color={color}>{row.nameColor}</IdText>
    ),
    sizeOfColumn: { min: '160px', max: '160px' },
    hideByDefault: false,
  },
  {
    idKey: 'varColor', name: 'Exemplo de variável CSS', order: 2,
    ValueComponent: ({row, color}) => (
      <IdText color={color}>{`--color-${row.nameColor}-500`}</IdText>
    ),
    sizeOfColumn: { min: '264px', max: '264px' },
    hideByDefault: false,
  },
  {
    idKey: '025', name: '025', order: 3,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c025 || 'transparent'}>025</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '050', name: '050', order: 4,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c050 || 'transparent'}>050</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '075', name: '075', order: 5,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c075 || 'transparent'}>075</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '100', name: '100', order: 6,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c100 || 'transparent'}>100</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '125', name: '125', order: 7,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c125 || 'transparent'}>125</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '150', name: '150', order: 8,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c150 || 'transparent'}>150</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '175', name: '175', order: 9,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c175 || 'transparent'}>175</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '200', name: '200', order: 10,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c200 || 'transparent'}>200</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '225', name: '225', order: 11,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c225 || 'transparent'}>225</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '250', name: '250', order: 12,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c250 || 'transparent'}>250</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '275', name: '275', order: 13,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c275 || 'transparent'}>275</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '300', name: '300', order: 14,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c300 || 'transparent'}>300</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '325', name: '325', order: 15,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c325 || 'transparent'}>325</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '350', name: '350', order: 16,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c350 || 'transparent'}>350</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '400', name: '400', order: 17,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c400 || 'transparent'}>400</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '450', name: '450', order: 18,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c450 || 'transparent'}>450</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '500', name: '500', order: 19,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c500 || 'transparent'}>500</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '550', name: '550', order: 20,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c550 || 'transparent'}>550</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '600', name: '600', order: 21,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c600 || 'transparent'}>600</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '650', name: '650', order: 22,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c650 || 'transparent'}>650</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '675', name: '675', order: 23,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c675 || 'transparent'}>675</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '700', name: '700', order: 24,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c700 || 'transparent'}>700</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '725', name: '725', order: 25,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c725 || 'transparent'}>725</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '750', name: '750', order: 26,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c750 || 'transparent'}>750</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '775', name: '775', order: 27,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c775 || 'transparent'}>775</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '800', name: '800', order: 28,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c800 || 'transparent'}>800</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '825', name: '825', order: 29,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c825 || 'transparent'}>825</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '850', name: '850', order: 30,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c850 || 'transparent'}>850</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '875', name: '875', order: 31,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c875 || 'transparent'}>875</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '900', name: '900', order: 32,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c900 || 'transparent'}>900</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '925', name: '925', order: 33,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c925 || 'transparent'}>925</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '950', name: '950', order: 34,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c950 || 'transparent'}>950</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
  {
    idKey: '975', name: '975', order: 35,
    ValueComponent: ({row}) => (<ColorBox color={row.tones.c975 || 'transparent'}>975</ColorBox>),
    sizeOfColumn: { min: '64px', max: '64px' },
    hideByDefault: false,
  },
]
