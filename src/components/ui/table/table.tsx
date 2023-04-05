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
import SemiArrowUp from '@/components/icons/semiArrowUp'
import ExpandableItem from './expandableItem'
import { changeStatusToColorName } from '@/type/utils'

const rawOpts = {
  optColumns: true,
  optFilters: true,
  optPrint: true,
  optDownload: true,
  optSearch: true,
}


export default function Table<T>({
  data, configColumns, color1 = 'grey', colorG1 = 'main', showTitle = true,
  colorG2 = 'second', title = 'Título exemplo da tabela', showCheck = true,
  alternateBg = true, maxOptionCellSize, sortByHeader = true, showFooter = false,
  showExpandableCell = true, isLoading, opts = rawOpts, showTableHeaderOptions = true,
  expandableComponent, componentOptionsCell, onChangeSelecteds, onChangeClicked,
  fnStatusForRow
}: I.ITable<T>) {

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
  const { hiddens, columnsToShow, showOrHideColumn, sizeString } = useTable({ configColumns })

  const [results, setResults] = useState<I.IResults[] | undefined[]>()
  const [clickedKeyColumn, setClickedKeyColumn] = useState<string>()
  const [sortMode, setSortMode] = useState(false)
  const [selectAll, setSelecAll] = useState<boolean>(false)
  const [selectedsRows, setSelectedRows] = useState<string[]>([])
  const [clickedRow, setClickedRow] = useState<string>('')
  const [expandedRowsIds, setExpandedRows] = useState<string[]>([])
  const [sizesCompositeString, setSizesCompositeString] = useState(
    U.refineOptionsOfRow(showCheck, showExpandableCell, sizeString)
  )
  const [optsState, setOptsState] = useState(opts)

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

  useEffect(() => { if(data?.status === 200) { setResults(data?.results) } }, [data])

  useEffect(() => { if(results?.length === selectedsRows.length) {
    setSelecAll(true) }
    if (selectedsRows.length === 0) {setSelecAll(false)}
  }, [selectedsRows, results])

  useEffect(() => { onChangeClicked?.(clickedRow) }, [onChangeClicked, clickedRow])

  useEffect(() => { onChangeSelecteds?.(selectedsRows) }, [selectedsRows, onChangeSelecteds])

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
    setSizesCompositeString(U.refineOptionsOfRow(showCheck, showExpandableCell, sizeString))
  }, [sizeString, showCheck, showExpandableCell])

  return (
    <>
      <S.All color1={color1} colorG1={colorG1} colorG2={colorG2}>
        { showTableHeaderOptions &&
          <TableOptions opts={optsState}
            color={color1} configColumns={configColumns} showTitle={showTitle}
            hiddens={hiddens} showOrHideColumn={showOrHideColumn}
          />
        }
        <S.AllScroll>
          <S.WrapperAll>
            <S.WrapperTable>
              { showTableHeaderOptions &&
                <S.TableTitle showTitle={showTitle}>
                  { showTitle &&
                    <S.TitleText>
                      {title}
                    </S.TitleText>
                  }
                </S.TableTitle>
              }
              { isLoading ? <Loading color={color1} /> :
                <>
                  <S.TableHeader sizesString={sizesCompositeString} showTableHeaderOptions={showTableHeaderOptions}>
                    { showExpandableCell && (<div></div>) }
                    { showCheck && (<S.CellHeaderSelector
                        qtd={selectedsRows.length.toString()}
                      >
                      <Checkbox
                        checked={selectAll}
                        hideText
                        horizontalAlignment='center'
                        onChange={() => setSelecAll(!selectAll)}
                        color={color1} noBg
                      />
                    </S.CellHeaderSelector>) }
                    { columnsToShow.map((col: I.ICollunnsConfig<T>, i1: number) => (
                      <S.CellHeader key={i1} sortByHeader={sortByHeader}
                        onClick={() => {
                          if(sortByHeader) {
                            setClickedKeyColumn(col?.idKey)
                            if(clickedKeyColumn === col?.idKey) setSortMode(!sortMode)
                          }
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
                    )) }
                  </S.TableHeader>
                  { results && results?.map((row: any, i1: number) => (
                    <Fragment key={i1}>
                      <S.TableRow
                        sizesString={sizesCompositeString}
                        statusColor={
                          fnStatusForRow !== undefined && fnStatusForRow(row) !== 'normal' ?
                          changeStatusToColorName(fnStatusForRow(row), color1) :
                          undefined
                        }
                        alternateBg={(alternateBg ? !(i1 % 2 === 0) : false)}
                        onClick={() => setClickedRow(`${row.id}`)}
                        isLast={i1 === (results.length - 1)} isFirst={i1 === 0}
                      >
                        { showExpandableCell && (<S.ExpandableIcon onClick={() => handleExpand(`${row.id}`)}>
                          <SemiArrowUp
                            color={color1}
                            show={showExpandableCell}
                            mode={!expandedRowsIds.includes(`${row.id}`) ? 'right' : 'down'}
                          />
                        </S.ExpandableIcon>) }
                        { showCheck && (<S.CellSelector>
                          <Checkbox
                            checked={selectedsRows.includes(`${row.id}`)}
                            onChange={() => handleCheckRow(`${row.id}`)} hideText
                            horizontalAlignment='center' color={color1} noBg
                          />
                        </S.CellSelector>) }
                        { columnsToShow.map((col: I.ICollunnsConfig<T>, i2: number) => (
                          <S.CellRow key={i2}
                            isLast={i2 === (columnsToShow.length - 1)}
                            isFirst={i2 === 0}
                          >
                            {
                              col.ValueComponent ?
                              col.ValueComponent({row, color: color1, rowId: `${row.id}`}) :
                              row[col.idKey]
                            }
                          </S.CellRow>
                        )) }
                      </S.TableRow>
                      {
                        // expandedRowsIds.includes(row.id) &&
                        expandableComponent && (
                        <ExpandableItem
                          showExpandable={expandedRowsIds.includes(`${row.id}`) || false}
                          ExpandThis={expandableComponent({row, color: color1, rowId: `${row.id}`})}
                        />)
                      }
                    </Fragment>
                  )) }
                </>
              }
            </S.WrapperTable>
            { showFooter &&
              <S.Footer>footer</S.Footer>
            }
          </S.WrapperAll>
        </S.AllScroll>
      </S.All>
    </>
  )
}