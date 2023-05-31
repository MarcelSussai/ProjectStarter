import { useState, useEffect, useLayoutEffect, Fragment, useRef, useCallback } from 'react'
import * as S from './styles'
import * as I from './interfaces'
import { isClickOutside } from '@/utils/isClickedOutSide'
import FilterIcon from '@/components/icons/filterIcon'
import PrintIcon from '@/components/icons/printIcon'
import Checkbox from '@/checkboxes/checkbox'
import SearchIcon from '@/components/icons/searchIcon'
import ColumnsIcon from '@/components/icons/columnsIcon'
import DownloadIcon from '@/components/icons/downloadIcon'
import TrashIcon from '@/components/icons/trashIcon'
import { InputCell, InputDefault } from '../inputs/styles'

export default function TableOptions<T>({
  color, configColumns, hiddens, showOrHideColumn, showTitle, opts
}: I.ITableOptions<T>) {

  const RefColumns = useRef<HTMLDivElement>(null)
  const [btnShowColumns, setBtnShowColumns] = useState<boolean>(false)
  const [btnShowSearch, setBtnShowSearch] = useState(false)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isClickOutside(RefColumns, event)) setBtnShowColumns(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => { document.removeEventListener('mousedown', handleClickOutside) }
  })
  const handleBtnShowColumns = () => setBtnShowColumns(!btnShowColumns)
  const handleBtnShowSearch = () => setBtnShowSearch(!btnShowSearch)

  return (
    <>
      <S.AllTableOptions showTitle={showTitle} opened={btnShowColumns}>
        { opts?.optSearch &&
          <>
            { btnShowSearch &&
                <S.inputSearch>
                  <InputCell color={color} maxW='232px' />
                </S.inputSearch>
            }
            <S.IconOption tipText='Procurar' opened={btnShowSearch} onClick={handleBtnShowSearch}>
              <SearchIcon width='16px' color={`${color}`} show />
            </S.IconOption>
          </>
        }
        { opts?.optDownload &&
          <S.IconOption tipText='Download'>
            <DownloadIcon width='20px' color={`${color}`} show />
          </S.IconOption>
        }
        { opts?.optPrint &&
          <S.IconOption tipText='Imprimir'>
            <PrintIcon width='14px' color={`${color}`} show />
          </S.IconOption>
        }
        { opts?.optColumns &&
          <S.OneOptions ref={RefColumns}>
            <S.IconOption tipText='Mostrar Colunas' opened={btnShowColumns} onClick={handleBtnShowColumns}>
              <ColumnsIcon width='20px' color={`${color}`} show />
            </S.IconOption>
            {
              btnShowColumns &&
              <S.OptionsColumns>
                <span className='title'>{'Mostrar Colunas'}</span>
                <S.ScrollOptionsWrapper>
                  { configColumns?.map((col) => (
                    <Checkbox
                      text={col.name} noBg fit={false}
                      key={col.idKey} color={color}
                      onChange={() => showOrHideColumn(col)}
                      checked={!hiddens.includes(col)}
                    />
                  )) }
                </S.ScrollOptionsWrapper>
              </S.OptionsColumns>
            }
          </S.OneOptions>
        }
        { opts?.optFilters &&
          <S.IconOption tipText='Filtros'>
            <FilterIcon width='16px' color={`${color}`} show />
          </S.IconOption>
        }
      </S.AllTableOptions>
    </>
  )
}