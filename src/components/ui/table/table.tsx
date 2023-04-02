import { useState, useEffect, useLayoutEffect, Fragment } from 'react'
import * as S from './styles'
import * as I from './interfaces'
import * as U from './utils'
import useTable from './useTable'
import addOrRemoveInArray from '@/utils/addOrRemoveInArray'
import ArrowUp from '@/icons/arrowUp'
import TableOptions from './tableOptions'
import Loading from '@/loading/loading'
import Checkbox from '@/checkboxes/checkbox'



export default function Table({
  data, configColumns, color1 = 'grey', colorG1 = 'main', showTitle = true,
  colorG2 = 'second', title = 'Título exemplo da tabela', showCheck = true,
  alternateBg = true, maxOptionCellSize, showOptionsCell = true, isLoading,
  expandableComponent, componentOptionsCell, onChangeSelecteds, onChangeClicked
}: I.ITable) {

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
  const {
    hiddens, columnsToShow, showOrHideColumn, sizeString
  } = useTable({ configColumns })

  const [results, setResults] = useState<I.IResults[] | undefined[]>()
  useEffect(() => { if(data?.status === 200) { setResults(data?.results) } }, [data])

  const [clickedKeyColumn, setClickedKeyColumn] = useState<string>()
  const [sortMode, setSortMode] = useState(false)
  const [selectAll, setSelecAll] = useState<boolean>(false)
  const [selectedsRows, setSelectedRows] = useState<string[]>([])
  const [clickedRow, setClickedRow] = useState<string>('')
  const [expandedRowsIds, setExpandedRows] = useState<string[]>([])

  const [sizesCompositeString, setSizesCompositeString] = useState(
    U.refineOptionsOfRow(showCheck, showOptionsCell, sizeString, maxOptionCellSize)
  )
  
  const handleExpand = (id: string) => {
    let raw = addOrRemoveInArray(id, expandedRowsIds)
    setExpandedRows(raw)
  }
  const handleCheckRow = (rowIndex: string) => {
    let raw: string[] = []
    if(selectedsRows?.includes(rowIndex)) {
      raw = selectedsRows.filter(sel => {if (sel !== rowIndex) return sel})
      setSelectedRows(raw)
    } else {
      raw = [...selectedsRows, rowIndex]
      setSelectedRows(raw)
    }
  }

  useEffect(() => {console.log(sizesCompositeString)}, [sizesCompositeString])
  useEffect(() => {onChangeClicked?.(clickedRow)}, [onChangeClicked, clickedRow])
  useEffect(() => {onChangeSelecteds?.(selectedsRows)}, [selectedsRows, onChangeSelecteds])
  useEffect(() => {
    let raw: string[] = []
    if(selectAll) {
      results && results.map((row: any) => {
        raw.push(row.id.toString())
        setSelectedRows(raw)
      } )
    } else { setSelectedRows(raw) }
  }, [selectAll, results])
  useIsomorphicLayoutEffect(() => {
    setSizesCompositeString(U.refineOptionsOfRow(showCheck, showOptionsCell, sizeString, maxOptionCellSize))
  }, [sizeString, showCheck, showOptionsCell])

  return (
    <>
      <S.All color1={color1} colorG1={colorG1} colorG2={colorG2}>
        <TableOptions
          color={color1} configColumns={configColumns}
          hiddens={hiddens} showOrHideColumn={showOrHideColumn}
        />
        <S.AllScroll>
          <S.WrapperAll>
            <S.WrapperTable>
              <S.TableTitle>
                {
                  showTitle &&
                  <S.TitleText>
                    {title}
                  </S.TitleText>
                }
              </S.TableTitle>
              {
                isLoading ? <Loading color={color1} /> :
                <>
                  <S.TableHeader sizesString={sizesCompositeString}>
                    { showOptionsCell && (<div></div>) }
                    { showCheck && (<S.CellHeaderSelector
                      qtd={selectedsRows.length.toString()}
                    >
                      <Checkbox
                        checked={selectAll} hideText
                        horizontalAlignment='center'
                        onChange={() => setSelecAll(!selectAll)}
                        color={color1} noBg
                      />
                    </S.CellHeaderSelector>) }
                    {
                      columnsToShow.map((col: I.ICollunnsConfig, i1: number) => (
                        <S.CellHeader key={i1}
                          onClick={() => {
                            setClickedKeyColumn(col?.idKey)
                            if(clickedKeyColumn === col?.idKey) setSortMode(!sortMode)
                          }}
                          isFirst={i1 === 0}
                          isLast={i1 === (columnsToShow.length - 1)}
                        >
                          <S.TextHeader>{col.name}</S.TextHeader>
                          <S.CellHeaderDetail>
                            <ArrowUp
                              color={color1}
                              show={(clickedKeyColumn === col?.idKey)}
                              mode={sortMode ? 'up' : 'down'}
                            />
                          </S.CellHeaderDetail>
                        </S.CellHeader>
                      ))
                    }
                  </S.TableHeader>
                  {
                    results?.map((row: any, i1: number) => (
                      <S.TableRow
                        key={i1} sizesString={sizesCompositeString}
                        alternateBg={(alternateBg ? !(i1 % 2 === 0) : false)}
                        onClick={() => setClickedRow(row.id.toString())}
                        isLast={i1 === (results.length - 1)} isFirst={i1 === 0}
                      >
                        { showOptionsCell && (<div></div>) }
                        { showCheck && (<S.CellSelector>
                          <Checkbox
                            checked={selectedsRows.includes(row.id.toString())}
                            onChange={() => handleCheckRow(row.id.toString())} hideText
                            horizontalAlignment='center' color={color1} noBg
                          />
                        </S.CellSelector>) }
                        {
                          columnsToShow.map((col: I.ICollunnsConfig, i2: number) => (
                            <S.CellRow key={i2}
                              isLast={i2 === (columnsToShow.length - 1)}
                              isFirst={i2 === 0}
                            >
                              {
                                col.ValueComponent ?
                                col.ValueComponent(row, color1) :
                                row[col.idKey]
                              }
                            </S.CellRow>
                          ))
                        }
                      </S.TableRow>
                    ))
                  }
                  <div>footer</div>
                </>
              }
            </S.WrapperTable>
          </S.WrapperAll>
        </S.AllScroll>
      </S.All>
    </>
  )
}