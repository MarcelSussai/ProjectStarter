import * as I from './interfaces'
import * as S from './styles'
import { ConfigColumns } from './exampleConfigColumns'
import Table from '@/ui/table/table'
import { useMock01 } from '@/queries/useMock01'
import { IValueComponent } from '@/ui/table/interfaces'
import TextDefault from '@/ui/type/textDefault'
import HeadTitles from '@/ui/type/headTitles'
import CodeBlock from '../../components/ui/type/codeBlock';
import SrcText from '@/components/ui/type/srcText'


const code = [
`export const mock_01 = {
  status: 200,
  results: [
    {
      id: 1,
      date: new Date().toISOString().substring(0, 19),
      description: 'Descrição do item 01',
      monetaryValue: 3000.500000,
      percentage: 0.486755,
      text: 'Texto do mock'
    },
    {
      id: 2,
      date: new Date().toISOString().substring(0, 19),
      description: 'Descrição mais longa como exemplo do item 02',
      monetaryValue: 40.000000,
      percentage: 32.240000,
      text: 'Texto do mock'
    },
    {
      id: 3,
      date: new Date().toISOString().substring(0, 19),
      description: 'item 03',
      monetaryValue: 480.500000,
      percentage: 100.000000,
      text: 'Texto do mock'
    },
    {
      id: 4,
      date: new Date().toISOString().substring(0, 19),
      description: 'Essa é a descrição do item 04',
      monetaryValue: 2.400000,
      percentage: 50.000000,
      text: 'Texto do mock'
    },
    {
      id: 5,
      date: new Date().toISOString().substring(0, 19),
      description: 'Aqui está o item 05',
      monetaryValue: 60000000.400000,
      percentage: 80.000000,
      text: 'Texto do mock'
    },
    {
      id: 6,
      date: new Date().toISOString().substring(0, 19),
      description: '06',
      monetaryValue: 6.400000,
      percentage: 64.000000,
      text: 'Texto do mock'
    },
    {
      id: 7,
      date: new Date().toISOString().substring(0, 19),
      description: 'Esse item é do mesmo número do dia de aniversário da minha mãe, essa é a descrição do item 07',
      monetaryValue: 128.400000,
      percentage: 32.800000,
      text: 'Texto do mock'
    },
    {
      id: 8,
      date: new Date().toISOString().substring(0, 19),
      description: 'Descrição do item 08',
      monetaryValue: 96.050000,
      percentage: 48.720000,
      text: 'Texto do mock'
    },
    {
      id: 9,
      date: new Date().toISOString().substring(0, 19),
      description: 'Este é Descrição do item 09',
      monetaryValue: 128256880.050000,
      percentage: 96.720000,
      text: 'Texto do mock'
    },
    {
      id: 10,
      date: new Date().toISOString().substring(0, 19),
      description: 'O ultimo item que tem nesse mock de dados, é o item 10',
      monetaryValue: 1.000000,
      percentage: 1.000000,
      text: 'Texto do mock'
    },
  ]
}`,
`export const ConfigColumns: ICollunnsConfig<I.IRowData>[] = [
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
      <TextDefault fit color={color}>{row.description}</TextDefault>
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
    sizeOfColumn: { min: '96px', max: '96px' },
    hideByDefault: false,
  },
  {
    idKey: 'date', name: 'Data', order: 4,
    ValueComponent: ({row, color}) => (
      <DateText color={color}>{new Date(\`\$\{row.date\}\`).toLocaleDateString()}</DateText>
    ),
    sizeOfColumn: { min: '120px', max: '120px'},
    hideByDefault: false,
  },
  {
    idKey: 'monetaryValue', name: 'Valor', order: 5,
    ValueComponent: ({row, color}) => {
      return (
      <MonetaryText color={color} >
        {configMonetaryValue(row.monetaryValue)}
      </MonetaryText>
    )},
    sizeOfColumn: { min: '220px', max: '220px' },
    hideByDefault: false,
  },
  {
    idKey: 'monetaryValue2', name: 'Valor 2', order: 6,
    ValueComponent: ({row, color}) => {
      return (
      <MonetaryText color={color} >
        {configMonetaryValue(row.monetaryValue)}
      </MonetaryText>
    )},
    sizeOfColumn: { min: '220px', max: '220px' },
    hideByDefault: false,
  },
]`,
`\<Table
  colorG1='main' colorG2='second' color1='greyAqua'
  configColumns={ConfigColumns} expandableComponent={ExpandableTest}
  data={mock01} isLoading={mock01isLoading}
  fnStatusForRow={rawFnStatusForRow} alternateBg={false}
\/\>`
]


const ExpandableTest = ({row, color = 'grey', rowId}: IValueComponent<I.IRowData>) => {

  return (
    <div>
      Teste! {rowId} <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      Teste! {rowId} <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  )
}

export default function TableTestView({

}: I.ITableTestView) {

  const {
    data: mock01,
    error: mock01Error,
    isLoading: mock01isLoading,
    isSuccess: mock01isSucess
  } = useMock01()

  const rawFnStatusForRow = (row: I.IRowData) => {
    if(row.monetaryValue === 3000.5) {return 'alert'}
    if(row.monetaryValue === 40) {return 'alert'}
    if(row.monetaryValue === 6.4) {return 'alert'}
    if(row.monetaryValue === 480.5) {return 'warn'}
    if(row.monetaryValue === 60000000.4) {return 'ok'}
    if(row.monetaryValue === 128256880.05) {return 'ok'}
    if(row.monetaryValue === 2.4) {return 'info'}
    return 'normal'
  }

  return (
    <S.All>
      <HeadTitles>{`Exemplo de uso do componente de tabela`}</HeadTitles>
      <TextDefault>
        {`Será preciso passar as seguintes propriedades para o componente de tabela:`}
      </TextDefault>
      <SrcText alignment='flex-start'>
        {`Um objeto contendo dados que serão passados via propriedade ao componente de tabela:`}
      </SrcText>
      <TextDefault>
        {`Esses dados também podem ser consultados com o react query configurados no projeto.`} <br />
        {`e buscados com a api fetch do navegador melhorada pelo nextjs já imbutida no projeto!`} <br />
        {`os dados dentro de results podem ser de qualquer coisa contanto que tenha um id`} <br />
      </TextDefault>
      <TextDefault>
        {`repare que há uma propriedade `} <SrcText alignment='flex-start'>{'status'}</SrcText>
        {` e uma `} <SrcText alignment='flex-start'>{'results'}</SrcText>
        {` e para o dado ser exibido é preciso o status ser `}
        <SrcText alignment='flex-start'>{'200'}</SrcText>{` .`}
      </TextDefault>
      <CodeBlock lang='tsx' text={code[0]} fit={true} />
      <SrcText alignment='flex-start'>
        {`Um array de objetos contendo as configurações das colunas:`}
      </SrcText>
      <TextDefault>
        {`O idKey tem que ser único em cada coluna `}
        {`e também é bom especificar a ordem de cada coluna`}
      </TextDefault>
      <CodeBlock lang='tsx' text={code[1]} fit={true} />
      <TextDefault> {`Para usar o componente de tabela em outro componente ou página:`} </TextDefault>
      <CodeBlock lang='tsx' text={code[2]} fit={true} />
      <TextDefault>
        {`Exemplo de vários tipos de uso do componente de tabela:`}
      </TextDefault>
      <Table
        colorG1='main' colorG2='second' color1='greyAqua'
        configColumns={ConfigColumns} expandableComponent={ExpandableTest}
        data={mock01} isLoading={mock01isLoading}
        fnStatusForRow={rawFnStatusForRow} alternateBg={false}
      />
      <Table
        colorG1='blue' colorG2='teal' color1='greyBlue'
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='pink' colorG2='wine' color1='greyRed'
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='leaf' colorG2='green' color1='greyGreen'
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='purple' colorG2='paleRed' color1='greyPurple' showTitle={false}
        configColumns={ConfigColumns} expandableComponent={ExpandableTest}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='purple' colorG2='cyan' color1='grey'
        configColumns={ConfigColumns} expandableComponent={ExpandableTest}
        data={mock01} isLoading={mock01isLoading} alternateBg={false}
      />
      <Table
        colorG1='gold' colorG2='cream' color1='default' showCheck={false}
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading} showTableHeaderOptions={false}
      />
    </S.All>
  )
}

