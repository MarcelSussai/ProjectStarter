import Table from '@/components/ui/table/table'
import * as I from './interfaces'
import * as S from './styles'
import { ConfigColumns } from './exampleConfigColumns'
import { useMock01 } from '@/queries/useMock01'
import { IValueComponent } from '@/components/ui/table/interfaces'
import { IRowData } from '@/views/tableTestView/exampleConfigColumns'




const ExpandableTest = ({row, color = 'grey', rowId}: IValueComponent<IRowData>) => {

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


  return (
    <S.All>
      <Table
        colorG1='main' colorG2='second' color1='greyAzure'
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='purple' colorG2='cyan' color1='grey'
        configColumns={ConfigColumns} expandableComponent={ExpandableTest}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='gold' colorG2='cream' color1='brown' showCheck={false}
        configColumns={ConfigColumns} showExpandableCell={false}
        data={mock01} isLoading={mock01isLoading}
      />
    </S.All>
  )
}