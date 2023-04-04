import * as S from './styles'
import * as I from './interfaces'
import { useEffect, useRef, useState } from 'react'


export default function ExpandableItem ({
  ExpandThis, showExpandable
}: I.IExapandableItem) {
  const RefExpandable = useRef<any>(null)
  const [heightExpand, setHeightExpand] = useState<number>(0)
  
  useEffect(() => {
    let rawHeight = RefExpandable !== null ? RefExpandable?.current?.['clientHeight'] : 0
    let height = rawHeight !== null && typeof rawHeight === 'number' ? rawHeight + 200 : 200
    setHeightExpand(height)
  }, [showExpandable])

  return (
    <S.ExpandableWrapper elementHeight={`${heightExpand}`} isOpen={showExpandable}>
      <S.ExpandableAll ref={RefExpandable}>
        {ExpandThis}
      </S.ExpandableAll>
    </S.ExpandableWrapper>
  )
}