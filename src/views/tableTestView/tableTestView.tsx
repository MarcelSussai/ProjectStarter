import Table from '@/components/ui/table/table'
import * as I from './interfaces'
import * as S from './styles'
import { ConfigColumns } from '@/components/ui/table/exampleConfigColumns'
import { useMock01 } from '@/queries/useMock01'
import Loading from '@/components/ui/loading/loading'


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
      {/* <Loading color='grey' /> */}
      <Table
        colorG1='main' colorG2='second' color1='greyAzure'
        configColumns={ConfigColumns}
        data={mock01} isLoading={mock01isLoading}
      />
      <Table
        colorG1='purple' colorG2='teal' color1='grey'
        configColumns={ConfigColumns}
        data={mock01} isLoading={mock01isLoading}
      />
    </S.All>
  )
}