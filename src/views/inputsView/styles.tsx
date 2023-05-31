import styled from 'styled-components'
import * as P from '@/styles/parts'

export const All = styled.section`
  ${P.ShowTransition}
  ${ P.TransitionFn({}) }
  ${ P.ColumnFlex }
  justify-content: center;
  gap: 16px;
`

export const ContainerInput = styled.div`
  ${P.ShowTransition}
  ${P.TransitionFn({})}
  ${P.CenterFlex}
  justify-content: flex-start;
  max-width: 400px;
`