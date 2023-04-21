import * as P from '@/styles/parts'
import styled from 'styled-components'

export const Main = styled.main`
  ${P.ColumnFlex}
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  gap: 8px;
  padding: 8px;
`