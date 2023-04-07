import * as P from '@/styles/parts'
import styled from 'styled-components'

interface IContentText { color?: string }
export const ContentText = styled.div<IContentText>`
  ${({color = 'grey'}) => P.doCssColor(color, '200', 'c1')}
  ${P.TransitionDefault}
  ${P.ShowTransition}
  ${P.ColumnFlex}
  ${P.Size('fit-content')}
  gap: 8px;
  padding: 16px;
  border: solid 2px var(--c1-200);
  border-radius: ${P.roundeds[4]};
`