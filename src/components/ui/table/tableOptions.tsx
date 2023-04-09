import { useState, useEffect, useLayoutEffect, Fragment, useRef } from 'react'
import * as S from './styles'
import * as I from './interfaces'
import { isClickOutside } from '@/utils/isClickedOutSide'
import FilterIcon from '@/components/icons/filterIcon'
import PrintIcon from '@/components/icons/printIcon'
import Checkbox from '@/checkboxes/checkbox'
import SearchIcon from '@/components/icons/searchIcon'
import ColumnsIcon from '@/components/icons/columnsIcon'
import DownloadIcon from '@/components/icons/downloadIcon'

export default function TableOptions<T>({
  color, configColumns, hiddens, showOrHideColumn, showTitle, opts
}: I.ITableOptions<T>) {

  const RefColumns = useRef<HTMLDivElement>(null)
  const [btnShowColumns, setBtnShowColumns] = useState<boolean>(false)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isClickOutside(RefColumns, event)) setBtnShowColumns(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => { document.removeEventListener('mousedown', handleClickOutside) }
  })
  const handleBtnShowColumns = () => setBtnShowColumns(!btnShowColumns)

  return (
    <>
      <S.AllTableOptions showTitle={showTitle} opened={btnShowColumns}>
        { opts?.optSearch &&
          <S.IconOption>
            <SearchIcon width='16px' color={`${color}`} show />
          </S.IconOption>
        }
        { opts?.optDownload &&
          <S.IconOption>
            <DownloadIcon width='20px' color={`${color}`} show />
          </S.IconOption>
        }
        { opts?.optPrint &&
          <S.IconOption>
            <PrintIcon width='16px' color={`${color}`} show />
          </S.IconOption>
        }
        { opts?.optColumns &&
          <S.OneOptions ref={RefColumns}>
            <S.IconOption opened={btnShowColumns} onClick={handleBtnShowColumns}>
              <ColumnsIcon width='20px' color={`${color}`} show />
            </S.IconOption>
            {
              btnShowColumns &&
              <S.OptionsColumns>
                <span className='title'>{'Mostrar Colunas'}</span>
                { configColumns?.map((col, i1) => (
                  <Checkbox
                    text={col.name} noBg fit={false}
                    key={i1} color={color}
                    onChange={() => showOrHideColumn(col)}
                    checked={!hiddens.includes(col)}
                  />
                )) }
              </S.OptionsColumns>
            }
          </S.OneOptions>
        }
        { opts?.optFilters &&
          <S.IconOption>
            <FilterIcon width='16px' color={`${color}`} show />
          </S.IconOption>
        }
      </S.AllTableOptions>
    </>
  )
}