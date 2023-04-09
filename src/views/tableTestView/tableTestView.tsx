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
import { ContentText } from '@/components/ui/containers/ContentText'
import Text from '@/components/ui/type/text'
import IdText from '@/components/ui/type/idText'


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
    // ... mais o tanto de dados que for necessário ...
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
      <DateText color={color}>
        {new Date(\`\$\{row.date\}\`).toLocaleDateString()}
      </DateText>
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

const texts = [
  `Será preciso passar as seguintes propriedades para o componente de tabela:`, // 0
  `Um objeto contendo dados que serão exibidos na tabela`, // 1
  `Um array de objetos contendo as configurações das colunas`, // 2
  `A propriedade data é um array de itens que será exibido na tabela.`, // 3
  `Esses dados também podem ser consultados com o react query configurados no projeto com o modelo de endpoints e queries.`, // 4
  `Os dados dentro de results podem ser de qualquer coisa contanto que tenha um id.`, // 5
  `Repare que há duas propriedades:`, // 6
  `E para o dado ser exibido é preciso o status ser:`, // 7
  `O idKey tem que ser único em cada coluna e também é bom especificar a ordem de cada coluna`, // 8
  `Para usar o componente de tabela em outro componente ou página:`, // 9
  `Exemplo de vários tipos de uso do componente de tabela:`, // 10
  'Esses são os dados obrigatórios', // 11
  'Os dados opcionais são:', // 12
  'Cor principal da tabela que dá cor a quase tudo na tabela, exceto o gradiente de fundo do texto, forneça o nome de uma cor configurada no projeto, e essa cor será usada na tabela junto com suas tonalidades.', // 13
  'Cor do gradiente 1', // 14
  'Cor do gradiente 2', // 15
  'Título da tabela', // 15
]

const ExpandableTest = ({row, color = 'greyAzure', rowId}: IValueComponent<I.IRowData>) => {

  // const {
  //   data: mock01,
  //   error: mock01Error,
  //   isLoading: mock01isLoading,
  //   isSuccess: mock01isSucess
  // } = useMock01()


  return (
    <div>
      <Table
        color1={color} showCheck={true} title='Tabela interna'
        configColumns={[
          {idKey: 'id1', name: 'ID', order: 1, sizeOfColumn: { min: '80px' }},
          {idKey: 'id2', name: 'ID 2', order: 2, sizeOfColumn: { min: '80px' }},
          {idKey: 'id3', name: 'ID 3', order: 2, sizeOfColumn: { min: '80px' }},
          {idKey: 'id4', name: 'ID 4', order: 2, sizeOfColumn: { min: '80px' }},
          {idKey: 'id5', name: 'ID 5', order: 2, sizeOfColumn: { min: '80px' }},
          {idKey: 'id6', name: 'ID 6', order: 2, sizeOfColumn: { min: '80px' }},
          {idKey: 'id7', name: 'ID 7', order: 2, sizeOfColumn: { min: '80px' }},
          {idKey: 'id8', name: 'ID 8', order: 2, sizeOfColumn: { min: '80px' }},
        ]} showExpandableCell={false}
        data={{
          status: 200,
          results: [
            { id: 1, },
            { id: 2, },
            { id: 3, },
            { id: 4, },
          ]
        }} isLoading={false} showTableHeaderOptions={false}
      />
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
      <Text> {texts[0]} </Text>
      <ContentText>
        <SrcText alignment='flex-start'> {`data`} </SrcText>
        <Text> {texts[1]} </Text>
        <SrcText alignment='flex-start'> {`configColumns`} </SrcText>
        <Text> {texts[2]} </Text>
      </ContentText> <br />
      <SrcText alignment='flex-start'> {`data`} </SrcText>
      <Text> {texts[3]} {texts[4]} </Text>
      <Text> {texts[6]} </Text>
      <IdText alignment='flex-start' fit>{'status'}</IdText>
      <IdText alignment='flex-start' fit>{'results'}</IdText>
      <Text> {texts[5]} <br /> {texts[7]} </Text>
      <IdText alignment='flex-start' fit>{'200'}</IdText>
      <CodeBlock lang='tsx' text={code[0]} fit={true} /> <br />
      <SrcText alignment='flex-start'> {`configColumns`} </SrcText>
      <Text> {texts[8]} </Text>
      <CodeBlock lang='tsx' text={code[1]} fit={true} />
      <Text> {texts[9]} </Text>
      <CodeBlock lang='tsx' text={code[2]} fit={true} />
      <Text> {texts[10]} </Text>
      <Table
        colorG1='greyVista' colorG2='grey' color1='greyAzure'
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
        colorG1='leaf' colorG2='green' color1='greyGreen'
        configColumns={ConfigColumns} expandableComponent={ExpandableTest}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='purple' colorG2='paleRed' color1='greyPurple' showTitle={false}
        configColumns={ConfigColumns} expandableComponent={ExpandableTest}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='purple' colorG2='teal' color1='greyPurple'
        configColumns={ConfigColumns} expandableComponent={ExpandableTest}
        data={mock01} isLoading={mock01isLoading} alternateBg={false}
      />
      <Table
        color1='default' showCheck={true}
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading} showTableHeaderOptions={false}
      />
      <Table
        color1='greyBlue' showCheck={true} expandableComponent={ExpandableTest}
        configColumns={ConfigColumns}
        data={mock01} isLoading={mock01isLoading} showTableHeaderOptions={false}
      />
    </S.All>
  )
}

