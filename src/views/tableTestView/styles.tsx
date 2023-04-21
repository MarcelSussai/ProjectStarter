import styled from 'styled-components'
import * as P from '@/styles/parts'

export const All = styled.article`
  ${ P.ShowTransition }
  ${ P.TransitionFn({}) }
  ${ P.ColumnFlex }
  justify-content: center;
  padding: 4px;
  gap: 24px;
  ${P.medias[2]} { padding: 8px; }
  ${P.medias[6]} { padding: 16px; }
`

export const ContainerTextDefault = styled.div`
  ${P.CenterFlex}
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`