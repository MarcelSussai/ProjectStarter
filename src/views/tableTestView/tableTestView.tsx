import Table from '@/components/ui/table/table'
import * as I from './interfaces'
import * as S from './styles'
import { ConfigColumns } from './exampleConfigColumns'
import { useMock01 } from '@/queries/useMock01'
import { IValueComponent } from '@/components/ui/table/interfaces'





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
    if(Number(row.id) >= 5 && Number(row.id) <= 8) return 'alert'
    return 'normal'
  }

  return (
    <S.All>
      <Table
        colorG1='main' colorG2='second' color1='greyAzure'
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading} fnStatusForRow={rawFnStatusForRow}
      />
      <Table
        colorG1='main' colorG2='second' color1='greyBlue'
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='red' colorG2='green' color1='greyRed'
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='main' colorG2='second' color1='greyGreen'
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='wine' colorG2='leaf' color1='greyPurple' showTitle={false}
        configColumns={ConfigColumns} expandableComponent={ExpandableTest}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='purple' colorG2='cyan' color1='grey'
        configColumns={ConfigColumns} expandableComponent={ExpandableTest}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='gold' colorG2='cream' color1='default' showCheck={false}
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading} showTableHeaderOptions={false}
      />
    </S.All>
  )
}

